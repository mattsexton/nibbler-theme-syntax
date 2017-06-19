const React = require('react');
const { action } = require('mobx');
const { inject, observer } = require('mobx-react');

// HOC
const { withAnalytics } = require('../common/analytics/index.jsx');

// Components
const Linkbar = require('../common/header/linkbar.jsx');
const MainRegion = require('../layout/pages/main-region.jsx');
const MasterPage = require('../layout/pages/master-page.jsx');
const SearchForm = withAnalytics(require('./search-form.jsx'));
const ToolbarRegion = require('../layout/pages/toolbar-region.jsx');

const OMNITURE_DATA = {
  omnitureProperties: {
    pageName: 'page.Hotels',
    channel: 'storefront',
    prop2: 'storefront',
    eVar2: 'D=c2',
    prop30: '1033', // TODO: This will need to be dynamic based on context
    eVar54: 'D=c30'
  }
};

/**
 * The home page for Hotel search. Contains the initial search form.
 * This page should be served up in an offline situation via the service
 * worker.
 */
@inject('page', 'analytics')

@observer class Home extends React.Component {
  /**
   * Static fetch for accessing critical resources server-side.
   *
   * @param {object}  Server-side properties (e.g. body, query params)
   */
  @action
  static fetch({stores}) {
    Object.assign(stores, {}); // remove me

    a === b;
    a !== b;

    return new Promise((resolve) => {
      resolve({});
    });
  }

  render() {
    this.props.page.title = 'Hotels: Search Cheap Hotel Deals, Discounts, & Reservations';

    return (
      <MasterPage route={this.props.route}>
        <ToolbarRegion>
          <Linkbar />
        </ToolbarRegion>
        <MainRegion className="hotel-search">
          <SearchForm loading={false} pageUsable={true} omnitureData={OMNITURE_DATA} useProgressIndicator={true} />
        </MainRegion>
      </MasterPage>
    );
  }
}

module.exports = Home;
