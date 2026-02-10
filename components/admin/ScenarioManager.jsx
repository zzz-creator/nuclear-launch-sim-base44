import React, { useState } from 'react';
import { Panel } from '../simulator/Panel';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, Plus, Download, Upload, Play, Trash2, 
  CheckCircle, XCircle, Clock, TrendingUp 
} from 'lucide-react';

export default function ScenarioManager({ 
  scenarios, 
  currentScenario,
  onCreateScenario, 
  onLoadScenario, 
  onDeleteScenario,
  onExportScenario,
  onImportScenario,
  performanceData,
  systemState
}) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newScenario, setNewScenario] = useState({
    name: '',
    description: '',
    diagnosticOverrides: {},
    faultConfig: {},
    targetCoords: { lat: '', lon: '' }
  });

  const handleCreate = () => {
    if (!newScenario.name) return;
    onCreateScenario(newScenario);
    setNewScenario({
      name: '',
      description: '',
      diagnosticOverrides: {},
      faultConfig: {},
      targetCoords: { lat: '', lon: '' }
    });
    setShowCreateForm(false);
  };

  const getScenarioStats = (scenarioId) => {
    const runs = performanceData.filter(p => p.scenarioId === scenarioId);
    const completed = runs.filter(r => r.completed).length;
    const avgTime = runs.length > 0 
      ? runs.reduce((sum, r) => sum + (r.completionTime || 0), 0) / runs.length 
      : 0;
    return { runs: runs.length, completed, avgTime: Math.round(avgTime / 1000) };
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e] border-b border-[#2a2a3e] flex-shrink-0">
        <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
          Training Scenarios
        </span>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1"
        >
          <Plus className="w-3 h-3" />
          New
        </button>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {scenarios.length === 0 ? (
            <p className="text-xs text-gray-500 text-center py-4">No scenarios created</p>
          ) : (
            scenarios.map((scenario) => {
              const stats = getScenarioStats(scenario.id);
              const isActive = currentScenario?.id === scenario.id;
              
              return (
                <div
                  key={scenario.id}
                  className={`p-3 rounded border transition-colors ${
                    isActive 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : 'bg-[#1a1a2e] border-[#2a2a3e] hover:border-[#3a3a4e]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-bold text-gray-200">
                          {scenario.name}
                        </span>
                        {isActive && (
                          <span className="text-xs text-green-400 font-bold">ACTIVE</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{scenario.description}</p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-blue-400" />
                          <span className="text-gray-400">{stats.runs} runs</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-400">{stats.completed} completed</span>
                        </div>
                        {stats.avgTime > 0 && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span className="text-gray-400">{stats.avgTime}s avg</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onLoadScenario(scenario)}
                        disabled={isActive}
                        className="p-1.5 hover:bg-green-500/20 rounded text-green-400 hover:text-green-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Load Scenario"
                      >
                        <Play className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onExportScenario(scenario)}
                        className="p-1.5 hover:bg-blue-500/20 rounded text-blue-400 hover:text-blue-300"
                        title="Export Scenario"
                      >
                        <Download className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onDeleteScenario(scenario.id)}
                        className="p-1.5 hover:bg-red-500/20 rounded text-red-400 hover:text-red-300"
                        title="Delete Scenario"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Scenario Details */}
                  <div className="mt-2 pt-2 border-t border-[#2a2a3e] space-y-1">
                    {Object.keys(scenario.diagnosticOverrides || {}).length > 0 && (
                      <div className="text-xs">
                        <span className="text-gray-500">Diagnostic overrides: </span>
                        <span className="text-gray-300">
                          {Object.entries(scenario.diagnosticOverrides).map(([key, val]) => 
                            `${key}=${val}`
                          ).join(', ')}
                        </span>
                      </div>
                    )}
                    {Object.keys(scenario.faultConfig || {}).length > 0 && (
                      <div className="text-xs">
                        <span className="text-gray-500">Faults: </span>
                        <span className="text-orange-400">
                          {Object.keys(scenario.faultConfig).length} configured
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}

          {/* Create Form */}
          {showCreateForm && (
            <div className="bg-[#0a0a0f] border border-green-500/30 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-[#1a1a2e] border-b border-[#2a2a3e]">
                <span className="text-xs font-mono uppercase tracking-wider text-green-400">
                  Create New Scenario
                </span>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-xs text-gray-500 hover:text-gray-300"
                >
                  Cancel
                </button>
              </div>
              
              <div className="p-3 space-y-2">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Scenario Name</label>
                  <Input
                    value={newScenario.name}
                    onChange={(e) => setNewScenario({ ...newScenario, name: e.target.value })}
                    placeholder="e.g., Degraded Communications Test"
                    className="bg-[#0a0a0f] border-[#2a2a3e] text-xs text-gray-200"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Description</label>
                  <Textarea
                    value={newScenario.description}
                    onChange={(e) => setNewScenario({ ...newScenario, description: e.target.value })}
                    placeholder="Describe the training objective..."
                    className="bg-[#0a0a0f] border-[#2a2a3e] text-xs text-gray-200 h-16"
                  />
                </div>
                
                <button
                  onClick={handleCreate}
                  disabled={!newScenario.name}
                  className="w-full px-4 py-2 bg-green-600/20 hover:bg-green-600/30 disabled:bg-gray-700 disabled:cursor-not-allowed border border-green-600/50 text-green-400 text-xs font-bold tracking-wider rounded transition-colors"
                >
                  CREATE SCENARIO
                </button>
              </div>
            </div>
          )}

          {/* Import Button */}
          <button
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = '.json';
              input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    try {
                      const scenario = JSON.parse(event.target.result);
                      onImportScenario(scenario);
                    } catch (err) {
                      alert('Invalid scenario file');
                    }
                  };
                  reader.readAsText(file);
                }
              };
              input.click();
            }}
            className="w-full px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/50 text-blue-400 text-xs font-bold tracking-wider rounded transition-colors flex items-center justify-center gap-2"
          >
            <Upload className="w-3 h-3" />
            IMPORT SCENARIO
          </button>
        </div>
    </div>
  );
}