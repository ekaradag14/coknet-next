// Utility functions similar to Next.js app router patterns
// These will be useful during migration and can be replaced with Next.js equivalents

// Utility for merging class names (similar to Next.js patterns)
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

// Utility for handling async data fetching (similar to Next.js patterns)
export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}

// Utility for handling form data (similar to Next.js patterns)
export function getFormData(formData: FormData) {
  const data: Record<string, any> = {};
  Array.from(formData.entries()).forEach(([key, value]) => {
    data[key] = value;
  });
  return data;
}

// Utility for handling search params (similar to Next.js patterns)
export function getSearchParams(searchParams: URLSearchParams) {
  const params: Record<string, string> = {};
  Array.from(searchParams.entries()).forEach(([key, value]) => {
    params[key] = value;
  });
  return params;
}

// Utility for handling dynamic segments (similar to Next.js patterns)
export function getDynamicSegments(pathname: string, pattern: string) {
  const segments: Record<string, string> = {};
  const pathParts = pathname.split('/').filter(Boolean);
  const patternParts = pattern.split('/').filter(Boolean);
  
  patternParts.forEach((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const key = part.slice(1, -1);
      segments[key] = pathParts[index] || '';
    }
  });
  
  return segments;
} 