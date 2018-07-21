import React, { Component } from 'react';
import Vue from 'vue';
import Vuex from 'vuex';
import { Store, SeqDiagram, Version } from 'vue-sequence';
import 'vue-sequence/dist/vue-sequence.css';
Vue.use(Vuex);

class SequenceDiagram extends Component {
  constructor() {
    super(...arguments);
    this.store = {};
  }
  componentDidMount() {
    console.log('component did mount', arguments);
    let app = new Vue({ el: this.refs.mount1, store: new Vuex.Store(Store), render: h=>h(SeqDiagram)});
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