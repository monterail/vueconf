import circle from '../../assets/img/announcement/circle.svg'
import ring from '../../assets/img/announcement/ring.svg'
import pentagon from '../../assets/img/announcement/pentagon.svg'
import triangle from '../../assets/img/announcement/triangle.svg'

export const Shape = function() {
  const site = document.getElementsByClassName("site");
  const shapes = [circle, ring, pentagon, triangle]
  const width = window.innerWidth - 50;
  const height = site[0].clientHeight - (site[0].clientHeight * 0.2);

  const icon = shapes[Math.floor(Math.random() * shapes.length)]
  const posX = Math.round(Math.random() * width) - 20
  const posY = Math.round(Math.random() * height) + 20
  const rotation = Math.round((Math.random()*360)+1)
  const iconWidth = 15;
  const iconHeight = 15;

  this.className = "bubble"
  this.background = `url(${icon})`
  this.transform = `rotate(${rotation}deg)`
  this.posX = `${posX}px`
  this.posY = `${posY}px`
}
