import Ember from 'ember';
import VisJsChild from 'ember-cli-visjs/components/visjs-child';

export default VisJsChild.extend({
  type: 'node',

  /**
   * @public
   *
   * Unique node-identifier. Also use this value for the
   * edges.
   * @type {String}
   */
  id: '',

  /**
   * @public
   *
   * The label to display within the node.
   * @type {String}
   */
  label: '',

  /**
   * @public
   *
   * If set, this overrides the networks global color.
   * Use a Hex-Value when setting this.
   * @type {String}
   */
  color: false,

  colorChanged: Ember.observer('color', function() {
    let container = this.get('containerLayer');
    container.updateNodeColor(this.get('id'), this.get('color'));
  })

});