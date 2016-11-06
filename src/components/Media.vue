<template>
<div class="element" @click="details">
  <img :src="media.images.fanart" :alt="media.title" class="thumb">
  <div class="info">
    <h2>{{media.title}}</h2>
    <div class="subinfo">
      <div class="stars">
        <i class="material-icons"
                       v-for="i in 5"
                       v-bind:class="{ active: i <= Math.round(media.rating/20)}">
                       fiber_manual_record
                    </i>
      </div>
      <div class="year">{{media.year}}</div>
      <div v-if="media.type == 'show'" class="seasons">{{seasons}}</div>
    </div>
    <div class="overview">{{media.overview}}</div>
  </div>
</div>

</template>

<script>
var pluralize = require('pluralize')

export default {
  props: ['media'],
  data () {
    return {
      ready: false
    }
  },
  computed: {
    seasons: function () {
      return pluralize('Season', this.media.num_seasons, true)
    }
  },
  methods: {
    details () {
      console.log(this.media)
    }
  }
}
</script>


<style>

.element {
  width: calc(100%/3);
}

.info {
  width: 75%;
  margin: 0 auto;
  color: #757575;
}

.info h2 {
  font-family: 'Poppins';
  font-size: 24px;
  color: #212121;
  margin: 15px 0px 5px 0px;
}

.thumb {
  width: 100%;
}


.subinfo div {
  margin: 10px;
  display: inline;
}

.subinfo .stars {
  margin-left: 0;
}

.subinfo .stars i {
  font-size: 10px;
  margin: 0;
}

.subinfo .stars .active {
  color: #de1212;
}

.overview {
  max-height: 100px;
  margin: 15px 0px 50px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* Fallback for non-webkit */
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

</style>
