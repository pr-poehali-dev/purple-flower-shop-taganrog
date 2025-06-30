import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Flower" size={32} className="text-primary" />
          <h1 className="text-2xl font-montserrat font-bold text-purple-darker">
            Цветочный рай
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Главная
          </a>
          <a
            href="#catalog"
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Каталог
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Услуги
          </a>
          <a
            href="#gallery"
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Галерея
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Связаться
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Звонок
          </Button>
          <Button size="sm">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Корзина
          </Button>
        </div>
      </div>
    </header>
  );
}
