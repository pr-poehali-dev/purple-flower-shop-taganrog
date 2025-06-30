import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-purple-darker leading-tight">
                Свежие цветы
                <span className="text-primary block">в Таганроге</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Создаем прекрасные букеты для ваших особенных моментов.
                Доставляем счастье в каждом лепестке по всему городу.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Flower2" size={20} className="mr-2" />
                Выбрать букет
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={24} className="text-primary" />
                <span className="text-sm font-medium">Доставка по городу</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={24} className="text-primary" />
                <span className="text-sm font-medium">Работаем 24/7</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-light/40 rounded-2xl flex items-center justify-center">
                <Icon name="Flower" size={200} className="text-primary/60" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              🌸 Скидка 15%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
