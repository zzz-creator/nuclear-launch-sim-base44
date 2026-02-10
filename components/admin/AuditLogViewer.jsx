import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { LogOut, Download, RefreshCw } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ACTION_ICONS = {
  LOGIN: '🔓',
  LOGOUT: '🔒',
  ROLE_CHANGE: '👤',
  ACCESS_REVOKED: '🚫',
  ACCESS_GRANTED: '✅',
  SCENARIO_CREATED: '📋',
  FAULT_INJECTED: '⚡',
  SYSTEM_LOCK: '🔐',
  PASSWORD_RESET: '🔑',
  ADMIN_DISABLED: '❌',
  ADMIN_ENABLED: '✓'
};

export default function AuditLogViewer({ currentUser, addLog, isSuperAdmin }) {
  const [auditLogs, setAuditLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterAction, setFilterAction] = useState('ALL');
  const [filterUser, setFilterUser] = useState('ALL');
  const [uniqueUsers, setUniqueUsers] = useState([]);

  useEffect(() => {
    loadAuditLogs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filterAction, filterUser, auditLogs]);

  const loadAuditLogs = async () => {
    try {
      setLoading(true);
      const logs = await base44.entities.AdminAuditLog.list('-created_date', 200);
      setAuditLogs(logs);
      
      // Extract unique users
      const users = [...new Set(logs.map(l => l.performedBy))];
      setUniqueUsers(users);
    } catch (err) {
      addLog('error', `Failed to load audit logs: ${err.message}`, true);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = auditLogs;

    if (filterAction !== 'ALL') {
      filtered = filtered.filter(log => log.action === filterAction);
    }

    if (filterUser !== 'ALL') {
      filtered = filtered.filter(log => log.performedBy === filterUser);
    }

    setFilteredLogs(filtered);
  };

  const exportLogs = () => {
    const csv = [
      ['Timestamp', 'Action', 'Performed By', 'Target User', 'Success', 'Details'],
      ...filteredLogs.map(log => [
        new Date(log.created_date).toLocaleString(),
        log.action,
        log.performedBy,
        log.targetUser || '-',
        log.success ? 'Yes' : 'No',
        JSON.stringify(log.details || {})
      ])
    ];

    const csvContent = csv.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `audit-log-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    addLog('info', 'Audit logs exported', true);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e] border-b border-[#2a2a3e] flex-shrink-0">
        <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
          Audit Log
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={loadAuditLogs}
            disabled={loading}
            className="text-xs text-blue-400 hover:text-blue-300 disabled:opacity-50"
            title="Refresh logs"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
          <button
            onClick={exportLogs}
            disabled={filteredLogs.length === 0}
            className="text-xs text-green-400 hover:text-green-300 disabled:opacity-50"
            title="Export as CSV"
          >
            <Download className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="p-2 bg-[#1a1a2e] border-b border-[#2a2a3e] grid grid-cols-2 gap-2 flex-shrink-0">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Action</label>
            <Select value={filterAction} onValueChange={setFilterAction}>
              <SelectTrigger className="bg-[#0a0a0f] border-[#2a2a3e] text-xs h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Actions</SelectItem>
                {Object.keys(ACTION_ICONS).map(action => (
                  <SelectItem key={action} value={action}>
                    {ACTION_ICONS[action]} {action}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Performed By</label>
            <Select value={filterUser} onValueChange={setFilterUser}>
              <SelectTrigger className="bg-[#0a0a0f] border-[#2a2a3e] text-xs h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Users</SelectItem>
                {uniqueUsers.map(user => (
                  <SelectItem key={user} value={user}>
                    {user}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Scrollable Logs */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {filteredLogs.length === 0 ? (
            <p className="text-xs text-gray-500 text-center py-4">No logs found</p>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                className={`p-3 rounded border text-xs ${
                  log.success
                    ? 'bg-green-500/5 border-green-500/20'
                    : 'bg-red-500/5 border-red-500/20'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{ACTION_ICONS[log.action] || '📝'}</span>
                    <div>
                      <p className={`font-bold ${
                        log.success ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {log.action}
                      </p>
                      <p className="text-gray-500">
                        {new Date(log.created_date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {!log.success && (
                    <span className="text-red-400 text-xs">FAILED</span>
                  )}
                </div>

                <div className="space-y-1 pl-8">
                  <p className="text-gray-400">
                    <span className="text-gray-500">By:</span> {log.performedBy}
                  </p>
                  {log.targetUser && (
                    <p className="text-gray-400">
                      <span className="text-gray-500">Target:</span> {log.targetUser}
                    </p>
                  )}
                  {log.details && Object.keys(log.details).length > 0 && (
                    <p className="text-gray-500 text-xs">
                      {JSON.stringify(log.details)}
                    </p>
                  )}
                  {log.errorMessage && (
                    <p className="text-red-400 text-xs">
                      Error: {log.errorMessage}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 text-center px-3 py-2 bg-[#1a1a2e] border-t border-[#2a2a3e] flex-shrink-0">
        Total: {auditLogs.length} | Showing: {filteredLogs.length}
      </div>
    </div>
  );
}