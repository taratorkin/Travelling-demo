import React, { Fragment } from 'react';
import styles from './css/popularPlaces.min.css';

export default class PopularPlaces extends React.Component {

  constructor(props) {
    super(props);
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  handleImgClick(e) {
    let elem;
    let dotArray = Array.from(this.dotList.children);
    let imageArray = Array.from(this.imageList.children);

    for (elem of imageArray) {
      let currentNode = elem.children[0];

      if (currentNode.classList.contains(styles.popularPlaces__places__images__img_active)) {
        currentNode.classList.toggle(styles.popularPlaces__places__images__img_active);
      }
    }

    for (elem of dotArray) {
      if (elem.classList.contains(styles.popularPlaces__places__dotSelector__dot_active)) {
        elem.classList.toggle(styles.popularPlaces__places__dotSelector__dot_active);
      }
    }

    const correspondingIndex = imageArray.findIndex(arrElem => {
      if (e.target.children.length === 1) {
        return arrElem === e.target;
      } else {
        return arrElem === e.target.parentNode;
      }
  });

    dotArray[correspondingIndex].classList.toggle(styles.popularPlaces__places__dotSelector__dot_active);

    if (e.target.children.length === 1) {
      e.target.children[0].classList.toggle(styles.popularPlaces__places__images__img_active);
    } else {
      e.target.classList.toggle(styles.popularPlaces__places__images__img_active);
    }

  }




  handleDotClick(e) {
    let elem;
    const dotArray = Array.from(e.target.parentNode.children);
    const imageArray = Array.from(this.imageList.children);

    if (e.target.classList.contains(styles.popularPlaces__places__dotSelector__dot_active)) {
      return;
    }

    for (elem of dotArray) {
      if (elem.classList.contains(styles.popularPlaces__places__dotSelector__dot_active)) {
        elem.classList.toggle(styles.popularPlaces__places__dotSelector__dot_active);
      }
    }

    for (elem of imageArray) {
      if (elem.children[0].classList.contains(styles.popularPlaces__places__images__img_active)) {
        elem.children[0].classList.toggle(styles.popularPlaces__places__images__img_active);
      }
    }


    const correspondingIndex = dotArray.findIndex(elem => ( elem === e.target ));
    this.imageList.children[correspondingIndex].children[0].classList.toggle(styles.popularPlaces__places__images__img_active);

    e.target.classList.toggle(styles.popularPlaces__places__dotSelector__dot_active);


  }

  render() {
    return (
      <Fragment>
        <div className={styles.popularPlaces}>
          <div className={styles.content}>

            <div className={styles.popularPlaces__booking}>
              <div className={styles.popularPlaces__booking__line}></div>
              <div className={styles.popularPlaces__booking__wrapper}>
                <div className={styles.popularPlaces__booking__tabs}>
                  <div className={styles.popularPlaces__booking__tabs__tab}>HOTEL</div>
                  <div className={styles.popularPlaces__booking__tabs__tab}>TOURS</div>
                  <div className={[styles.popularPlaces__booking__tabs__tab, styles.popularPlaces__booking__tabs__tab_active].join(' ')}>PACKAGE</div>
                </div>
                <div className={styles.popularPlaces__booking__search}>
                  <div className={styles.popularPlaces__booking__search__container}>
                    <label>WHERE?</label>
                    <input type="text" placeholder="Choose Location"/>
                  </div>
                  <div className={styles.popularPlaces__booking__search__container}>
                    <label>WHICH?</label>
                    <input type="text" placeholder="Choose City"/>
                  </div>
                  <div className={styles.popularPlaces__booking__search__container}>
                    <label>CHECK IN</label>
                    <input type="text" placeholder="YY-DD-MM"/>
                  </div>
                  <div className={styles.popularPlaces__booking__search__container}>
                    <label>CHECK OUT</label>
                    <input type="text" placeholder="YY-DD-MM"/>
                  </div>
                  <div className={styles.popularPlaces__booking__search__button}>SEARCH</div>
                </div>
              </div>
            </div>

            <div className={styles.popularPlaces__places}>
              <p className={styles.popularPlaces__places__text1}>POPULAR TOUR PACKAGES</p>
              <p className={styles.popularPlaces__places__text2}>POPULAR PLACES</p>
              <div className={styles.popularPlaces__places__images} ref={elem => { this.imageList = elem }}>
                <div className={styles.popularPlaces__places__images__img1} onClick={this.handleImgClick}>
                  <div className={[styles.popularPlaces__places__images__whiteSign, styles.popularPlaces__places__images__img_active].join(' ')}>
                    Mancity, England</div>
                </div>
                <div className={styles.popularPlaces__places__images__img2} onClick={this.handleImgClick}>
                  <div className={styles.popularPlaces__places__images__whiteSign}>Mancity, England</div>
                </div>
                <div className={styles.popularPlaces__places__images__img3} onClick={this.handleImgClick}>
                  <div className={styles.popularPlaces__places__images__whiteSign}>Mancity, England</div>
                </div>
              </div>

              <div className={styles.popularPlaces__places__dotSelector} ref={elem => { this.dotList = elem }}>
                <div className={[styles.popularPlaces__places__dotSelector__dot, styles.popularPlaces__places__dotSelector__dot_active].join(' ')} onClick={this.handleDotClick}></div>
                <div className={styles.popularPlaces__places__dotSelector__dot} onClick={this.handleDotClick}></div>
                <div className={styles.popularPlaces__places__dotSelector__dot} onClick={this.handleDotClick}></div>
              </div>
            </div>



            <div className={styles.popularPlaces__text}>
              <p className={styles.popularPlaces__text__text1}>Most Popular Travel Destinations</p>
              <p className={styles.popularPlaces__text__text2}>Love travelling? Plan and book your perfect trip with expert advice,
                travel tips, destination,<br />information and inspiration from Lonely Planet</p>
            </div>


          </div>
        </div>
      </Fragment>
    );
  }

}
