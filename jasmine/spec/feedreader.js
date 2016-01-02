$(function() {

    describe('RSS Feeds', function () {

        it('Feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('(RSS Feeds) do not have non-empty URLs', function () {
            var feeds = allFeeds.length,
                i;
            for (i = 0; i < feeds; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).toBeGreaterThan(1);
            }
        });
    });

    describe('The Menu', function(){
        var menuIcon = $('.menu-icon-link'),
            body = $('body');

        it('hidden by default', function(){

            expect(body.hasClass('menu-hidden')).toBeTruthy();

        });

        it('toggles visibility when clicked', function() {

            // visible
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            // not visible
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();

        });

    });

    describe('Initial Entries', function(){

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("At least one element is in .feed container", function() {
            expect($('.feed').length && $('.entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function(){
        var newContent,
            oldContent;

        beforeEach(function(done) {
            loadFeed(0, function(){
                oldContent = $('.feed').html();
            });
            loadFeed(1, function(){
                newContent = $('.feed').html();
                done();
            });
        });

        it("New content is loaded", function(){
            expect(newContent).not.toBe(oldContent);
        });

    });

}());




