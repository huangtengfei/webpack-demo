
import './main.css';
import sub from './sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');

app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);

const myPromise = Promise.resolve(666);
myPromise.then((n) => {
	$('body').append('<p>promise result is ' + n + '</p>');
})
$('body').append('<p>now is ' + moment().format() + '</p>');