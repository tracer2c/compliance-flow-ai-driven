const Demo = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Demo Page</h1>
        <p className="text-muted-foreground mb-8">Use this page to test demo code.</p>
        
        {/* Add your demo code below */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <p className="text-card-foreground">Your demo content goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
