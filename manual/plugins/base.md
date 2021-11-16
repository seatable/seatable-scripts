# dtable

## Init
The plugin development environment is divided into two types, the development environment and the production environment. Because of the different environments, the initialization methods are also different:

- In the development environment, you need to provide the configuration file required by the plugin, which is used to initialize the plugin and obtain the data required by the plugin.

- In the production environment, you need to install the plugin, then the plugin can directly read the data of the base in the current browser to initialize the plugin.

### Initialize the plugin

#### Development environment

Initialize the plugin in the development environment

```javascript
import DTable from 'dtable-sdk';

const dtable = new DTable();
const settings = {
  "server": "https://cloud.seatable.cn",
  "APIToken": "50c17897ae8b1c7c428d459fc2c379a9bc3806cc",
}
await dtable.init(config);
```

#### Production environment

Initialize the plugin in the production environment

```javascript
import DTable from 'dtable-sdk';

const dtable = new Dtable();
const dtableStore = window.app.dtableStore; // Get initialization data from the production environment
await dtable.initBrowser(dtableStore);
```


### Monitoring event changes

#### Subscribe events

|Event type|description | use |
|-|-|-|
|dtable-connect|Indicates that a link has been established with the server, and the data loading is complete | Update state and UI display |
|local-dtable-changed|Indicates that some operations have been performed locally, and the data has changed| Update state and UI display |
|remote-dtable-changed| Indicates that some operations sent by the server have been performed locally, and the data has changed | Update state and UI display |

```javascript
import DTable from 'dtable-sdk';

const dtable = new Dtable();
dtable.subscribe('dtable-connect', () => {...});
dtable.subscribe('local-dtable-changed', () => {...});
dtable.subscribe('remote-dtable-changed', () => {...});
```

## Example

This is an initialization example in the development environment.

Since two environments need to be compatible, the initialization operations for general plugin development are as follows:

```javascript
import Dtable from 'dtable-sdk';
import PropTypes from 'prop-types';

const propsTypes = {
  isDevelopment: PropTypes.bool
};

const settings = {
  "server": "https://cloud.seatable.cn",
  "APIToken": "50c17897ae8b1c7c428d459fc2c379a9bc3806cc",
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.dtable = new Dtable();
  }

  async componentDidMount() {
    const { isDevelopment } = this.props;
    if (isDevelopment) {
      await dtable.init(settings);
      await this.dtable.syncWithServer();
      this.dtable.subscribe('dtable-connect', this.resetData);
    } else {
      const dtableStore = window.app.dtableStore;
      dtable.initBrowser(dtableStore);
    }

    this.dtable.subscribe('local-dtable-changed', this.resetData);
    this.dtable.subscribe('remote-dtable-changed', this.resetData);
  }

  resetData = () => {
    // ...
    this.setState({isLoading: false});
  }

  render() {
    return (
      ...
    );
  }

}
```

