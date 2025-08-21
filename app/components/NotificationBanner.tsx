"use client";

interface NotificationBannerProps {
  type: "info" | "warning" | "success";
  message: string;
  onDismiss?: () => void;
}

export function NotificationBanner({ type, message, onDismiss }: NotificationBannerProps) {
  const typeStyles = {
    info: "bg-accent/20 border-accent/30 text-accent",
    warning: "bg-warning/20 border-warning/30 text-warning",
    success: "bg-success/20 border-success/30 text-success",
  };

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✅",
  };

  return (
    <div className={`border rounded-lg p-3 ${typeStyles[type]} animate-slide-up`}>
      <div className="flex items-start space-x-2">
        <span className="text-sm">{icons[type]}</span>
        <p className="text-sm flex-1">{message}</p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
