const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = req.query.win ? Number(req.query.win) : 0;
  let total = req.query.total ? Number(req.query.total) : 0;
  console.log({ hand, win, total });
  const num = Math.floor(Math.random() * 3 + 1);
  let cpu = '';
  if (num === 1) cpu = 'グー';
  else if (num === 2) cpu = 'チョキ';
  else cpu = 'パー';
  let judgement = '';
  if (hand === cpu) {
    judgement = '引き分け';
  } else if (
    (hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1;
  } else {
    judgement = '負け';
  }
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };
  res.render('janken', display);
});

app.get("/muki", (req, res) => {
  let muki = req.query.muki;
  let win = req.query.win ? Number(req.query.win) : 0;
  let total = req.query.total ? Number(req.query.total) : 0;
  console.log({ muki, win, total });
  const num = Math.floor(Math.random() * 4 + 1);
  let cpu = '';
  if (num === 1) cpu = '上';
  else if (num === 2) cpu = '下';
  else if (num === 3) cpu = '右';
  else cpu = '左';
  let judgement = '';
  if (
    (muki === '上' && cpu === '上') ||
    (muki === '下' && cpu === '下') ||
    (muki === '右' && cpu === '右') ||
    (muki === '左' && cpu === '左')
  ) {
    judgement = '勝ち';
    win += 1;
  } else {
    judgement = '負け';
  }
  total += 1;
  const display = {
    your: muki,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };
  res.render('muki', display);
});

app.get("/meshi", (req, res) => {
  const message4 = "牛丼並盛，牛丼大盛，牛丼特盛，カレー";
  let meshi = req.query.meshi;
  let cost = req.query.cost ? Number(req.query.cost) : 0;
  console.log({ meshi, cost });
  if(meshi === '牛丼並盛') cost = 498;
  else if(meshi === '牛丼大盛') cost = '696';
  else if(meshi === '牛丼特盛') cost = '993';
  else cost = '465'
  res.render('meshi', {
    greet4: message4,
    meshi: meshi,
    cost: cost
  });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
