/** Matter Singleton
 */

import Fireuser from 'kyper-matter'

let instance = null
class FireuserInstance {
  constructor (appName, options) {
    if (!instance) {
      instance = new Fireuser(appName)
    }
    return instance
  }
}
// Create singleton instance of Matter using project name
export default FireuserInstance
