import './App.css';

// Group of modules (often placed at top left of screen) - Intend for the Dashboards in prototype
// Might not be needed
// - can just add widget at each page
// - use html id and class instead
export function Widget(props) {
    //list of modules/components names to be stored
    
    return (
        <div id="groupWidget" className="widget">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Card text goes here.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
    
}
