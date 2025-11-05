export default function HomePage() {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">
          Manage your projects, clients, and invoices all in one place.
        </p>
  
        <div className="bg-surface grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
          <div className="card">
            <h2 className="font-semibold text-lg mb-2">Active Projects</h2>
            <p>3 ongoing projects</p>
          </div>
          <div className="card">
            <h2 className="font-semibold text-lg mb-2">Pending Invoices</h2>
            <p>2 invoices awaiting payment</p>
          </div>
          <div className="card">
            <h2 className="font-semibold text-lg mb-2">Clients</h2>
            <p>5 active clients</p>
          </div>
        </div>
      </section>
    );
  }
  