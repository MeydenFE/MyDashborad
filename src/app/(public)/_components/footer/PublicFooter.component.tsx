/** ログイン前　フッター画面表示用　コンポーネント */
const PublicFooter = () => {
  return (
    <>
      {/* Footer */}
      <footer className="border-t bg-white py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} YumeLog. All rights reserved.
      </footer>
    </>
  );
};

export default PublicFooter;
