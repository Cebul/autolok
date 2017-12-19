import React, { Component } from 'react'
import {
  CardImg,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Col,
  Row
} from 'reactstrap'

const items = [
  {
    src: 'slides/slide1.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'slides/slide2.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'slides/slide3.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'slides/slide4.png',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'slides/slide5.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  }
]

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <CardImg src={item.src}
                   alt={item.altText}
                   className="my-slide  " />
        </CarouselItem>
      )
    })

    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={{size:10, offset: 1}}>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default Example
