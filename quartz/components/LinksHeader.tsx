import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src="https://www.gstatic.com/android/keyboard/emojikitchen/20230803/u1f525/u1f525_u1f5ff.png?fbx"></img>
            <a href="/">Portfolio</a>
          </span>
          <span>
            <img src="https://www.gstatic.com/android/keyboard/emojikitchen/20240530/u2696-ufe0f/u2696-ufe0f_u1f5ff.png?fbx"></img>
            <a href="/pentest-guide/">Pentest Guide</a>
          </span>
          <span>
            <img src="https://www.gstatic.com/android/keyboard/emojikitchen/20240206/u1f984/u1f984_u1f5ff.png?fbx"></img>
            <a href="/life">Life</a>
          </span>
          <span>
            <img src="https://www.gstatic.com/android/keyboard/emojikitchen/20240206/u1f4bb/u1f4bb_u1f5ff.png?fbx"></img>
            <a href="/lighting">Lighting</a>
          </span>
          <span>
            <img src="https://www.gstatic.com/android/keyboard/emojikitchen/20240530/u2622-ufe0f/u2622-ufe0f_u1f5ff.png?fbx"></img>
            <a href="/posts">Posts</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor