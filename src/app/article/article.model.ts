/**
 * Created by Meatchell on 2017/5/29.
 */
export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp(): void {
    this.votes += 1;
  }
  voteDown(): void {
    this.votes -= 1;
  }
  domain(): string { // 公共方法
    try {
      const link: string = this.link.split('//')[1];
      return link;
    } catch (err) {
      return null;
    }
  }
}
