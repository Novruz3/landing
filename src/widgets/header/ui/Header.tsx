function Header() {
  return (
    <header className="py-4 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-purple-600">
          ШК
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Курсы</a>
          <a href="#">Как проходит обучение</a>
          <a href="#">Отзывы</a>
          <a href="#">Частые вопросы</a>
        </nav>
        <div className="text-sm font-medium">
          +7 950 425-69-08
        </div>
      </div>
    </header>
  )
}

export default Header