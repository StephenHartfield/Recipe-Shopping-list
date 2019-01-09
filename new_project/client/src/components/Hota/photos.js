import Image1 from './MPics/1.jpg'
import Image2 from './MPics/2.jpeg'
import Image3 from './MPics/3.jpeg'
import Image4 from './MPics/4.jpeg'
import Image5 from './MPics/5.jpeg'
import Image6 from './MPics/6.jpeg'
import Image7 from './MPics/7.jpeg'
import Image8 from './MPics/8.jpeg'
import Image9 from './MPics/9.jpeg'
import Image10 from './MPics/10.jpeg'
import Image11 from './MPics/11.jpeg'
import Image12 from './MPics/12.jpeg'
import Image13 from './MPics/13.jpeg'
import Image14 from './MPics/14.jpeg'
import Image15 from './MPics/15.jpeg'
import Image16 from './MPics/16.jpeg'
import Image17 from './MPics/17.jpeg'
import Image18 from './MPics/L1.jpeg'
import Image19 from './MPics/L2.jpeg'
import ImageA from './MPics/about.jpeg'
import ImageS from './MPics/selfie.jpeg'

var photo = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, ImageA, ImageS];

export function photos(num) {
	return photo[num];
}

export function getNum(num) {
	if(num < 0) {
		num = photo.length-1;
	}
	else if(num > photo.length-1) {
		num = 0;
	}
	return num
}

export function statusUpdate(state) {
	if(state === ' PLAY ') {
		return state = ' PAUSE '
	}
	else return state = ' PLAY ' 
}