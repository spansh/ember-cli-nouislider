import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      start: [ 5, 15 ],
      range: { min: 0, max: 20 },

      changed: false,
      sliding: false,
      updating: false,
      beenSet: false,
      started: false,
      ended: false,

      value: [ 5, 15 ]
    });
  },

  actions: {
    showEffect(property, val) {
      var model = this.modelFor("events");
      model.set('value', val);
      model.set(property, true);

      Ember.run.later(model, function() {
        this.set(property, false);
      }, 500);
    },

    update(val) {
      this.send("showEffect", "updating", val);
    },

    change: function(val) {
      this.send("showEffect", "changed", val);
    },

    setValue: function(val) {
      this.send("showEffect", "beenSet", val);
    },

    slide: function(val) {
      this.send("showEffect", "sliding", val);
    },

    started: function(val) {
      this.send("showEffect", "started", val);
    },

    ended: function(val) {
      this.send("showEffect", "ended", val);
    }
  }
});
