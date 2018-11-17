import * as React from 'react';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';


export default class IndexPage extends React.Component {
  constructor(props: Props, context: any){
    super(props, context);
  }

  render() {
    return <div>
      <div className="header-desc">
       <div className="desc"><h2>Beautiful and simple open source SVG icons.</h2></div>
      </div>

      <div className="social">
        <div className="social-btn">
          <div className="git-button">
            <a className="github-button" href="https://github.com/IconNest/iconnest" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star upeksha/icon-faster on GitHub">Star</a>
          </div>
          <div className="twitt-button">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">Tweet</a>
          </div>
        </div>
      </div>

      <div className="search-sec">
        <div className="search-box">
          <svg className="search-svg"><use xlinkHref="#search"></use></svg>
            <input type="text" name="search icon" placeholder="Search icons" />
        </div>
      </div>

      <section>
        <div className="icon-set">
          <div className="icon-menu">
            <button className="icon-btn" title='Calendar'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/calendar-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Calendar'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/calendar-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Calendar'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/calendar-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Cart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/cart_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Cart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/cart_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Cart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/cart_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File-doc'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file-doc-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File-doc'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_doc_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File-doc'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_doc_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File-add'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_add_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File-sub'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_sub_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='File-check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/file_check_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Youtube'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/youtube.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Instagram'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/instagram.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Facebook'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/facebook.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='iPod'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/iPod-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='iPod'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/iPod-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='iPod'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/iPod-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Trash'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/trash-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Trash'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/trash-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Trash'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/trash-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Desktop'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/desktop_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Desktop'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/desktop_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Desktop'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/desktop_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Tag'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/tag-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Tag'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/tag-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Tag'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/tag-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Power-off'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/power_stop-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Power-off'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/power_stop-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Power-off'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/power_stop-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Camera'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/camera-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Camera'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/camera-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Camera'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/camera-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Clock'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/clock_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Clock'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/clock_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Clock'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/clock_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Bar-chart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/barchart_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Bar-chart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/barchart_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Bar-chart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/barchart_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pie-chart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pie-chart-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pie-chart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pie-chart-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pie-chart'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pie-chart-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Download'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/download1_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Download'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/download1_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Download'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/download1_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Download'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/download_circle_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Download'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/download_cir_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Download'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/download_cir_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Search'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/search_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Search'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/search_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Search'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/search_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Search'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/search1_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Search'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/search1_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Search'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/search1_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_solid_cir.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_regular_cir.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_light_cir.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_solid_sq.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_regular_sq.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Check'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/check_light_sq.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Menu'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/more-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Menu'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/more-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Menu'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/more-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-arrow-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-arrow-regular.svg' />
            </button>
          </div>


          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-arrow-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-arrow-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-arrow-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-arrow-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-sq-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/up-arrow-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-arrow-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-arrow-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/right-arrow-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-sq-regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/down-arrow-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-arrow-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-arrow-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/left-arrow-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-cir-light.svg' />
            </button>
          </div>

           <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ne-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/es-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sw-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wn-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-up-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-up-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-up-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-down-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-down-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-down-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-right-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-right-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-right-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-left-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-left-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/angle-left-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_up_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_up_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_up_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_down_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_down_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_down_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_right_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_right_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_right_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_left_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_left_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Arrow'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/double_left_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Filter'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/filter-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Filter'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/filter-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Filter'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/filter-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Refresh'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/refresh-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Refresh'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/refresh-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Refresh'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/refresh-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Refresh'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/refresh1-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Refresh'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/refresh1-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exclamation-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exclamation-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exclamation-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exclamation-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exclamation-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exclamation-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-tri-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-tri-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-tri-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-octa-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-octa-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Exclamation'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/exc-octa-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Copy'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/copy-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Copy'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/copy-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Copy'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/copy-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='External-link'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/external-link-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='External-link'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ex-link-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='External-link'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/ex-link-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Priority'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/priority_solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Priority'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/priority_regular.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Priority'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/priority_light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Plus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/plus-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Minus'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/minus-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='List'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/list-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-sq-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-sq-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Close'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/close-sq-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Stop'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/stop-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Stop'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/stop-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Stop'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/stop-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play-next'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-next-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play-next'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-next-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play-next'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-next-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play-previous'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-previous-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play-previous'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-previous-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Play-previous'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/play-previous-light.svg' />
            </button>
          </div>


          <div className="icon-menu">
            <button className="icon-btn" title='Fast-forward'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/fast-forward-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Fast-forward'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/fast-forward-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Fast-forward'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/fast-forward-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Fast-backward'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/fast-backward-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Fast-backward'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/fast-backward-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Fast-backward'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/fast-backward-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pause'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pause-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pause'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pause-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pause'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pause-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pause'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pause-circle-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pause'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pause-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Pause'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/pause-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user1-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user1-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user1-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user2-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user2-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user2-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user3-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user3-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user3-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user-cir-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user-cir-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='User'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/user-cir-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Bookmark'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/bookmark-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Bookmark'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/bookmark-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Bookmark'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/bookmark-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-center'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-center-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-center'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-center-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-center'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-center-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-left'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-left-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-left'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-left-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-left'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-left-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-right'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-right-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-right'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-right-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-right'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-right-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-justify'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-justify-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-justify'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-justify-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Align-justify'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/align-justify-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Archive'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/archive-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Archive'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/archive-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Archive'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/archive-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Compass'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/compass-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Compass'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/compass-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Compass'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/compass-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Menu'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sandwich_menu-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Menu'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sandwich_menu-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Menu'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/sandwich_menu-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Credit-card'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/credit-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Credit-card'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/credit-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Credit-card'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/credit-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Board'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/board-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Board'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/board-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Board'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/board-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Wrench'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wrench-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Wrench'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wrench-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Wrench'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/wrench-light.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Timeline'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/timeline-solid.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Timeline'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/timeline-reg.svg' />
            </button>
          </div>

          <div className="icon-menu">
            <button className="icon-btn" title='Timeline'>
              <img src='https://s3.amazonaws.com/icon-nest/svg/new_icon/timeline-light.svg' />
            </button>
          </div>







        </div>
      </section>


    </div>
  }
}
