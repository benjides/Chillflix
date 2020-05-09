import Rooster from '@/components/Rooster'
import Details from '@/components/Details'

export function createRoosterView (type) {
  return {
    name: type + '-rooster',
    render (h) {
      return h(Rooster, {
        props: { type }
      })
    }
  }
}

export function createDetailsView (type) {
  return {
    name: type + '-details',
    render (h) {
      return h(Details, {
        props: { type }
      })
    }
  }
}
