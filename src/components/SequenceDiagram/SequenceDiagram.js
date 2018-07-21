import React, { Component } from 'react';
import Vue from 'vue';
import Vuex from 'vuex';
import { Store, SeqDiagram, Version } from 'vue-sequence';
import 'vue-sequence/dist/vue-sequence.css';
Vue.use(Vuex);

class SequenceDiagram extends Component {
  componentDidMount() {
    console.log('component did mount', arguments);
    let app = new Vue({ el: this.refs.mount1, store: new Vuex.Store(Store), render: h=>h(SeqDiagram)});

    app.$store.commit('code', 'A.method');
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