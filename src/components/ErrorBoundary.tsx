import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  title?: string;
  message?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const defaultTitle = this.props.title || "Oops, quelque chose s'est mal passé";
      const defaultMessage = this.props.message || "Une erreur s'est produite. Cela peut arriver sur certains appareils ou navigateurs.";

      return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-white px-4">
          <div className="max-w-md text-center space-y-4">
            <h1 className="text-2xl font-bold text-primary">
              {defaultTitle}
            </h1>
            <p className="text-muted-foreground">
              {defaultMessage}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
