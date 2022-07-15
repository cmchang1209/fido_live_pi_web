<template>
  <div class="home">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">{{ $t('golbal.name') }}</th>
          </tr>
        </thead>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      IceServersPort: 8000,
      webrtcurl: `${location.protocol}//${location.hostname==='192.168.2.208'? location.hostname : '192.168.2.208'}`,
      api: {
        getMediaList: "/api/getMediaList"
      },
      medialist: []
    };
  },
  mounted() {
    this.getMediaList()
  },
  methods: {
    getMediaList() {
      const medialisturl = `${this.webrtcurl}:${this.IceServersPort}${this.api.getMediaList}`
      this.$axios.get(medialisturl).then((res) => {
        console.log('res=', res.data)
      })
    }
  }
}

</script>
