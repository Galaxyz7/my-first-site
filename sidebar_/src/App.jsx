import MySidebar from "./components/Sidebar";

function App() {

    return (
        <>
          <div style={{
            display: 'flex'
          }}>
            <div>
              <MySidebar />
            </div>
            <div>
              <h1>
                Hello There
              </h1>
            </div>
          </div>
        </>
    );
}

export default App;