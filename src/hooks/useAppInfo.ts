import { useQuery } from '@tanstack/react-query';
import { AppInfo } from '../types';

// TODO: Replace with actual API call
const mockAppInfo: AppInfo = {
  id: '1',
  title: 'CoderDojo浦添アプリについて',
  content: `
    <p>CoderDojo浦添アプリは、浦添市の教育や子育てに関する情報を提供するデータベースアプリです。</p>
    <h2>主な機能</h2>
    <ul>
      <li>教育プログラムの検索・閲覧</li>
      <li>子育て支援サービスの情報提供</li>
      <li>地域の居場所情報の共有</li>
    </ul>
    <p>このアプリを通じて、より多くの方々に教育や子育ての機会を提供できることを願っています。</p>
  `,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function useAppInfo() {
  return useQuery({
    queryKey: ['appInfo'],
    queryFn: async () => mockAppInfo,
  });
}