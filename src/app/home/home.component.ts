import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  male_comment: string = 'thank you sooooo much 🙏😃💐💐🤗💖✨.';
  female_comment: string = 'thank you sooooo much 💖🤗💖😍🙏😃💐💖✨.';
  constructor() {}
  stop_mark = ['', '.'];
  emoji_for_boys = [
    '💖',
    '🤗',
    '✨',
    '💐',
    '🙏',
    '🤗',
    '😇',
    '😇',
    '😃',
    '💐',
    '🤗',
    '✨',
    '😃',
  ];
  emoji_for_girls = [
    '💖',
    '🤗',
    '😍',
    '✨',
    '💐',
    '🥰',
    '🙏',
    '🤗',
    '😇',
    '😇',
    '😃',
    '💐',
    '💖',
    '🤗',
    '✨',
    '😃',
  ];
  text_so = [
    'soooooo much ',
    'sooo much ',
    'sooooooo much ',
    'sooooo much ',
    'sooo much ',
    'soooooooo much ',
    'soooo much ',
  ];

  ngOnInit(): void {
    this.generateComments();
  }

  generateComments(): void {
    const thank_you = 'thank you ';
    const text_so = this.getTextSo();
    const emoji_for_girls = this.getEmojis('girls');
    const emoji_for_boys = this.getEmojis('boys');
    const commnet_boys =
      thank_you + text_so + emoji_for_boys + this.getStopMark();
    const commnet_girls =
      thank_you + text_so + emoji_for_girls + this.getStopMark();
    this.male_comment = commnet_boys;
    this.female_comment = commnet_girls;
  }

  getEmojis(type: string): string {
    let emojis = '😃';
    if (type === 'boys') {
      for (let i = 0; i < 11; i++) {
        emojis += this.emoji_for_boys[
          Math.floor(Math.random() * this.emoji_for_boys.length)
        ];
      }
    } else {
      for (let i = 0; i < 11; i++) {
        emojis += this.emoji_for_girls[
          Math.floor(Math.random() * this.emoji_for_girls.length)
        ];
      }
    }

    return emojis;
  }
  getTextSo(): string {
    const text_so = this.text_so[
      Math.floor(Math.random() * this.text_so.length)
    ];
    return text_so;
  }
  getStopMark(): string {
    let mark = this.stop_mark[
      Math.floor(Math.random() * this.stop_mark.length)
    ];
    return mark;
  }
}
