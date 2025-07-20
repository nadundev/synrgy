"use client";

export default function FontTest() {
  return (
    <div className="p-8 space-y-4 bg-white border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Font Testing & Debug</h2>
      
      <div className="space-y-2">
        <h3 className="font-bold mb-2 text-blue-600">CSS Variables Debug:</h3>
        <div className="text-sm font-mono bg-gray-100 p-2 rounded">
          <div>--font-sans: <span style={{fontFamily: 'var(--font-sans)'}}>PP Neue Montreal Test</span></div>
          <div>--font-mono: <span style={{fontFamily: 'var(--font-mono)'}}>Inter Mono Test 123</span></div>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold mb-2 text-green-600">font-sans (PP Neue Montreal):</h3>
        <p className="font-sans text-lg font-normal">Normal weight text - font-sans class</p>
        <p className="font-sans text-lg font-medium">Medium weight text - font-sans class</p>
        <p className="font-sans text-lg font-bold">Bold weight text - font-sans class</p>
        <p className="font-sans text-lg font-thin">Thin weight text - font-sans class</p>
      </div>
      
      <div>
        <h3 className="font-bold mb-2 text-purple-600">font-mono (Inter):</h3>
        <p className="font-mono text-lg">Monospace text 123456 - font-mono class</p>
        <code className="font-mono bg-gray-100 px-2 py-1 rounded">Code example - font-mono class</code>
      </div>
      
      <div>
        <h3 className="font-bold mb-2 text-orange-600">Default (should be PP Neue Montreal):</h3>
        <p className="text-lg">This should use PP Neue Montreal by default</p>
        <p className="text-lg font-medium">Medium weight default</p>
        <p className="text-lg font-bold">Bold weight default</p>
      </div>
      
      <div className="text-sm text-gray-500 mt-4">
        <p>If fonts are not loading, check browser dev tools Network tab for font loading errors.</p>
      </div>
    </div>
  )
} 