import { Api } from "./api"
import { GetCharactersResult } from "./api.types"

const API_PAGE_SIZE = 50

export class ProjectApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getProjects(userID: string): Promise<any> {
    try {
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
