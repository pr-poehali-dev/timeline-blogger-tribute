import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Slider } from "@/components/ui/slider";

const Index = () => {
  const [spectrumView, setSpectrumView] = useState(0);

  const spectrumModes = [
    { name: "Видимый свет", color: "from-purple-500 to-blue-500" },
    { name: "Инфракрасный", color: "from-red-600 to-orange-500" },
    { name: "Рентгеновский", color: "from-cyan-400 to-blue-600" },
    { name: "Комбинированное", color: "from-purple-500 via-orange-500 to-cyan-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="animate-fade-in-slow">
            <div className="mb-8">
              <Icon name="Telescope" className="w-16 h-16 mx-auto text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-cormorant font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Когда тьма перестала быть пустотой
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              История о том, как человечество научилось видеть невидимое
            </p>
            <div className="mt-12 animate-bounce">
              <Icon name="ChevronDown" className="w-8 h-8 mx-auto text-purple-400" />
            </div>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-20 space-y-32">
          <section className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Eye" className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Когда звёзды были просто точками
              </h2>
            </div>
            
            <Card className="bg-slate-900/50 backdrop-blur-sm border-purple-500/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Древние люди смотрели на небо и видели огоньки — дыры в небесном куполе, глаза богов, 
                застывшие капли божественного света. Они не знали, что перед ними — бесконечное пространство, 
                где каждая точка — целый мир.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Человечеству потребовались тысячелетия, чтобы превратить созерцание в наблюдение. 
                И всё началось с простого вопроса: <span className="text-purple-400 font-semibold">"А что, если подойти ближе?"</span>
              </p>
              
              <div className="mt-8 p-6 bg-slate-950/50 rounded-lg border border-purple-500/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 mx-auto bg-white rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">Небо глазами человека без телескопа</p>
              </div>
            </Card>
          </section>

          <section className="animate-fade-in-slow">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Zap" className="w-10 h-10 text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Как свет доходит до Земли
              </h2>
            </div>
            
            <Card className="bg-slate-900/50 backdrop-blur-sm border-yellow-500/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Свет — это информация, путешествующая со скоростью <span className="text-yellow-400 font-semibold">300 000 км/с</span>. 
                Когда мы смотрим на Солнце, мы видим его таким, каким оно было 8 минут назад. 
                Звёзды на небе — это прошлое, иногда на миллиарды лет.
              </p>
              <blockquote className="text-2xl font-cormorant italic text-purple-400 border-l-4 border-purple-500 pl-6 my-8">
                "Мы смотрим не на звёзды, а на их призраки"
              </blockquote>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <Icon name="ArrowRight" className="w-6 h-6 text-gray-500" />
                  <span className="text-sm text-gray-400">Звезда вспыхнула</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg">
                  <Icon name="Clock" className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-gray-400">Миллионы лет путешествия</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg">
                  <Icon name="Globe" className="w-6 h-6 text-blue-400" />
                  <span className="text-sm text-gray-400">Свет достигает Земли</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg opacity-50">
                  <div className="w-4 h-4 border-2 border-gray-600 rounded-full"></div>
                  <span className="text-sm text-gray-500">Звезды уже давно нет</span>
                </div>
              </div>
            </Card>
          </section>

          <section className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Telescope" className="w-10 h-10 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Первые телескопы
              </h2>
            </div>
            
            <Card className="bg-slate-900/50 backdrop-blur-sm border-blue-500/20 p-8">
              <div className="mb-6">
                <span className="text-blue-400 font-semibold">1609 год</span>
                <p className="text-lg text-gray-300 leading-relaxed mt-2">
                  Галилео Галилей направил свою подзорную трубу в небо и увидел то, чего "быть не могло" 
                  по представлениям времени: спутники Юпитера, кратеры Луны, фазы Венеры.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="p-6 bg-slate-950/50 rounded-lg text-center border border-blue-500/10">
                  <Icon name="Moon" className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm text-gray-300">Кратеры Луны</p>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-lg text-center border border-blue-500/10">
                  <Icon name="Circle" className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                  <p className="text-sm text-gray-300">Спутники Юпитера</p>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-lg text-center border border-blue-500/10">
                  <Icon name="Star" className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <p className="text-sm text-gray-300">Фазы Венеры</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Линзы изменили не только изображение — они изменили мышление. 
                От мифов человечество перешло к наблюдаемым фактам.
              </p>
            </Card>
          </section>

          <section className="animate-fade-in-slow">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Lightbulb" className="w-10 h-10 text-orange-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Как устроен телескоп внутри
              </h2>
            </div>
            
            <Card className="bg-slate-900/50 backdrop-blur-sm border-orange-500/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Телескоп — это не просто труба с линзами. Это сложная система сбора и фокусировки света, 
                где каждый элемент играет роль в создании изображения далёких миров.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-slate-950/80 to-blue-950/30 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Рефрактор</h3>
                  <p className="text-gray-300">Использует линзы для преломления света. Классический тип — подзорная труба Галилея.</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-slate-950/80 to-purple-950/30 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Рефлектор</h3>
                  <p className="text-gray-300">Использует зеркала для отражения света. Позволяет создавать большие телескопы.</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-slate-950/80 to-pink-950/30 rounded-lg border-l-4 border-pink-500">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">James Webb</h3>
                  <p className="text-gray-300">Космическая обсерватория с 18 зеркалами, работающая в инфракрасном диапазоне при температуре -233°C.</p>
                </div>
              </div>
            </Card>
          </section>

          <section className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Layers" className="w-10 h-10 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Обычный vs Профессиональный
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="User" className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-cormorant font-semibold">Любительский</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-cyan-400 mt-1" />
                    <span>Увеличивает изображение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-cyan-400 mt-1" />
                    <span>Видны яркие объекты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-cyan-400 mt-1" />
                    <span>Луна, планеты, скопления</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="bg-slate-900/50 backdrop-blur-sm border-purple-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Rocket" className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-cormorant font-semibold">Профессиональный</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Icon name="Sparkles" className="w-5 h-5 text-purple-400 mt-1" />
                    <span>Собирает максимум света</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Sparkles" className="w-5 h-5 text-purple-400 mt-1" />
                    <span>Работает на разных длинах волн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Sparkles" className="w-5 h-5 text-purple-400 mt-1" />
                    <span>Видит сквозь пыль и газ</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="animate-fade-in-slow">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Palette" className="w-10 h-10 text-pink-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Почему космос не чёрный
              </h2>
            </div>
            
            <Card className="bg-slate-900/50 backdrop-blur-sm border-pink-500/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Глаз человека видит лишь узкий диапазон видимого спектра. Но космос живёт на всех длинах волн: 
                в инфракрасном он тепловой, в ультрафиолетовом — светящийся, в рентгеновском — бурлящий.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-400">Выберите спектр:</span>
                  <span className="text-lg font-cormorant text-pink-400">{spectrumModes[spectrumView].name}</span>
                </div>
                
                <Slider
                  value={[spectrumView]}
                  onValueChange={(value) => setSpectrumView(value[0])}
                  max={3}
                  step={1}
                  className="w-full"
                />
                
                <div className={`h-64 rounded-lg bg-gradient-to-br ${spectrumModes[spectrumView].color} transition-all duration-700 flex items-center justify-center`}>
                  <p className="text-white text-lg font-semibold px-6 py-3 bg-black/30 backdrop-blur-sm rounded-lg">
                    {spectrumModes[spectrumView].name}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg">
                    <div className="w-full h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded mb-2"></div>
                    <span className="text-gray-400">Видимый</span>
                  </div>
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg">
                    <div className="w-full h-3 bg-gradient-to-r from-red-600 to-orange-500 rounded mb-2"></div>
                    <span className="text-gray-400">Инфракрасный</span>
                  </div>
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg">
                    <div className="w-full h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded mb-2"></div>
                    <span className="text-gray-400">Рентген</span>
                  </div>
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg">
                    <div className="w-full h-3 bg-gradient-to-r from-purple-500 via-orange-500 to-cyan-400 rounded mb-2"></div>
                    <span className="text-gray-400">Комбо</span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="Sparkles" className="w-10 h-10 text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
                Наблюдение как искусство
              </h2>
            </div>
            
            <Card className="bg-slate-900/50 backdrop-blur-sm border-yellow-500/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Современные астрофотографы и CGI-художники — это новые "художники тьмы". 
                Они превращают невидимые данные телескопов в визуальные шедевры, 
                которые помогают нам не просто смотреть на Вселенную, а понимать её.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20">
                  <Icon name="Database" className="w-8 h-8 text-purple-400 mb-3" />
                  <p className="text-sm text-gray-300">Сырые данные NASA</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-lg border border-orange-500/20">
                  <Icon name="Cpu" className="w-8 h-8 text-orange-400 mb-3" />
                  <p className="text-sm text-gray-300">Обработка ИИ</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20">
                  <Icon name="Image" className="w-8 h-8 text-cyan-400 mb-3" />
                  <p className="text-sm text-gray-300">Визуализация</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Граница между реальными данными и художественной визуализацией стирается. 
                И это прекрасно — ведь красота помогает увидеть истину.
              </p>
            </Card>
          </section>

          <section className="animate-fade-in-slow py-20">
            <Card className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border-purple-500/30 p-12 text-center">
              <div className="mb-8">
                <Icon name="Telescope" className="w-16 h-16 mx-auto text-purple-400 animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold mb-6">
                Человек, который научился видеть невозможное
              </h2>
              
              <Separator className="my-8 mx-auto w-24 bg-purple-500/30" />
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                От первой линзы до квантового сенсора — путь длиной в 400 лет. 
                Космос больше не пустота, а зеркало человеческого зрения.
              </p>
              
              <blockquote className="text-3xl font-cormorant italic text-purple-400 mb-8">
                "Телескоп не просто показывает звёзды — он показывает, как далеко может дотянуться человеческий взгляд"
              </blockquote>
              
              <div className="flex justify-center gap-8 mt-12 flex-wrap">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">1609</div>
                  <div className="text-sm text-gray-400 mt-2">Первый телескоп</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400">1990</div>
                  <div className="text-sm text-gray-400 mt-2">Hubble в космосе</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">2021</div>
                  <div className="text-sm text-gray-400 mt-2">James Webb запущен</div>
                </div>
              </div>
            </Card>
          </section>
        </div>

        <footer className="text-center py-12 text-gray-500 text-sm">
          <p>Лонгрид о телескопах и взгляде в бесконечность</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
