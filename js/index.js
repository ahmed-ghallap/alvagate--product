const detailsElements = document.querySelectorAll('.product  details');

detailsElements.forEach(el => {
    el.addEventListener('click', () => {
        // أغلق جميع عناصر التفاصيل الأخرى>
        document.querySelectorAll('.product  details')
        .forEach(detail => {
            if (detail !== el) {
                detail.removeAttribute('open'); // إغلاق العناصر الأخرى
            }
        });

        // فتح أو غلق العنصر الحالي بناءً على حالته
        if (!el.hasAttribute('open')) {
            el.removeAttribute('open'); // إذا كان مفتوحاً، أغلقه
        } else {
            el.setAttribute('open', ''); // إذا كان مغلقاً، افتحه
        }
    });
});


