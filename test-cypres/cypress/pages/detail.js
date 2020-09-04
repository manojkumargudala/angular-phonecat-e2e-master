'use strict';


var detailPage ={
    getTitle: function () {
        return cy.get('h1').invoke('text')
    },

    getMainImage: function () {
        return cy.get('img.phone.selected');
    },

    selectThumbnail: function (index) {
        var thumbnails = cy.get('.phone-thumbs img');
        return thumbnails.eq(index);
    }
};

module.exports = detailPage;