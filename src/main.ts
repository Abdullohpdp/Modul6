//menga html cssga mos 
import './style.css';
import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Carousel } from 'bootstrap';
// Carousel ni tanlash
const carouselElement = document.querySelector('#carouselExampleIndicators') as HTMLElement;
// Agar carousel mavjud bo'lsa, uni ishga tushirish
if (carouselElement) {
    const carousel = new Carousel(carouselElement, {
        interval: 2000, // Slaydlar orasidagi vaqt (ms)
        wrap: true, // Slaydlar oxiriga yetganda qaytadan boshlash
        touch: true, // Mobil qurilmalarda teginish bilan boshqarish
    });
}
// Carousel tugmalari uchun hodisa tinglovchilarini qo'shish
const prevButton = document.querySelector('.carousel-control-prev') as HTMLElement;
