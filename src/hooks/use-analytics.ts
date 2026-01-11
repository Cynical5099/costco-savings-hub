type EventName = 'cta_click' | 'page_view' | 'scroll_depth';

interface TrackingEvent {
  event: EventName;
  label: string;
  timestamp: number;
  url: string;
}

const STORAGE_KEY = 'landing_analytics';

export const useAnalytics = () => {
  const trackEvent = (event: EventName, label: string) => {
    const trackingEvent: TrackingEvent = {
      event,
      label,
      timestamp: Date.now(),
      url: window.location.href,
    };

    // Log to console for debugging
    console.log('[Analytics]', trackingEvent);

    // Store in localStorage for basic persistence
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const events: TrackingEvent[] = existing ? JSON.parse(existing) : [];
      events.push(trackingEvent);
      // Keep only last 100 events
      const trimmed = events.slice(-100);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch (e) {
      console.warn('Failed to store analytics event:', e);
    }

    // Google Analytics integration (if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        event_label: label,
      });
    }
  };

  const trackCTAClick = (buttonLabel: string) => {
    trackEvent('cta_click', buttonLabel);
  };

  const getStoredEvents = (): TrackingEvent[] => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      return existing ? JSON.parse(existing) : [];
    } catch {
      return [];
    }
  };

  return { trackEvent, trackCTAClick, getStoredEvents };
};
