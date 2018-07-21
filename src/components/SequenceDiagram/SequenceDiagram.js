import React, { Component } from 'react';
import Vue from 'vue';
import Vuex from 'vuex';
import { Store, SeqDiagram, Version } from 'vue-sequence';
import 'vue-sequence/dist/vue-sequence.css';
import cloneDeep from '../../utils/clone-deep';

Vue.use(Vuex);

function snapshotStore (code) {
  Store.state.code = code
  return new Vuex.Store(cloneDeep({modules: {Store}}))
}

class SequenceDiagram extends Component {
  constructor() {
    super(...arguments);
    this.store = {};
  }
  componentDidMount() {
    console.log('component did mount', arguments);
    let app = new Vue({ el: this.refs.mount1, store: snapshotStore(this.props.code), render: h=>h(SeqDiagram)});
    this.store = app.$store;
    this.store.commit('code', this.props.code);
  }
  componentDidUpdate() {
    this.store.commit('code', this.props.code);
  }
  render() {
    return (
      <div>
        {Version}
        <div ref="mount1"></div>
      </div>
    )
  }
}

export default SequenceDiagram;