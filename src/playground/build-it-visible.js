const app = {
  title: 'Visibilty Toggle',
  details: "These are the details",
  visible: []
};

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>{app.details}</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
