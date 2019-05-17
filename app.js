const superagent = require('superagent');
const cheerio = require('cheerio');

const requestUrl = 'http://www.boohee.com/food/group/2';

superagent
    .get(requestUrl)
    .end(function (err, res) {
        // 抛错拦截
        if (err) {
            process
                .stdout
                .write(err);
            return;
        }
        // 等待 code process.stdout.write(JSON.stringify(res));
        // process.stdout.write(res.text);

        let $ = cheerio.load(res.text);
        $('.item .text-box').each((ix, el) => {
            
            let _this = $(el)
            process
            .stdout
            .write(JSON.stringify(_this.find('a').attr('title')));
        });
        // process.stdout.write(JSON.stringify($));
    });