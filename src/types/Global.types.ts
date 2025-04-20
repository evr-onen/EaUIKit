
declare global {


    // interface ApplicationMenuItem {
    //     label       : string
    //     path        ?: string
    //     icon        ?: string
    //     meta ?: {
    //         title       : string
    //         description ?: string
    //     }
    //     children    ?: ApplicationMenuItem[]
    //     visibility  ?: boolean
    // }

}

export interface ApplicationMenuItem {
  label       : string
  path        ?: string
  icon        ?: string
  meta ?: {
      title       : string
      description ?: string
  }
  children    ?: ApplicationMenuItem[]
  visibility  ?: boolean
}