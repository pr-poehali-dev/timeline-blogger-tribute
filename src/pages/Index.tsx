import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const timelineEvents = [
  {
    date: "14 декабря 2024",
    time: "—",
    title: "Последний день",
    description: "В этот день Алексей Мельников покинул этот мир. Ему было всего 34 года.",
    type: "tragic"
  },
  {
    date: "15 декабря 2024",
    time: "—",
    title: "Скорбная весть",
    description: "Жена Марина Боковикова сообщила о смерти мужа в социальных сетях. «Мне кажется, я раньше никогда не думала о смерти. Мне всегда казалось, что количество моих болячек меня доконает первым. Но сегодня случилось горе. Ушел из жизни любимый муж, отец и сын. Внутри пустота с величиной в огромную дыру»",
    type: "news"
  },
  {
    date: "16 декабря 2024",
    time: "—",
    title: "Причина смерти",
    description: "Стало известно, что Алексей Мельников умер от инфаркта миокарда. Марина Боковикова объявила, что прощание и похороны пройдут в Алапаевске на этой неделе.",
    type: "info"
  }
];

const channels = [
  {
    name: "Афиша Екатеринбурга",
    description: "Канал о культурной жизни города",
    icon: "Calendar",
    link: "https://t.me/afishaekb"
  },
  {
    name: "Екатеринбург Online",
    description: "Новости Екатеринбурга",
    icon: "Newspaper",
    link: "https://t.me/ekaterinburgonline"
  },
  {
    name: "Мельников в городе",
    description: "Обзоры ресторанов и заведений",
    icon: "UtensilsCrossed",
    link: "https://t.me/melnikovvgorode"
  },
  {
    name: "Где мой трамвай",
    description: "Телеграм-бот для отслеживания транспорта",
    icon: "Bot",
    link: "https://t.me/ekbtrambot"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-2 h-16 bg-accent/30 rounded-full animate-candle"></div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-amber-500/80 to-amber-300/40 rounded-full blur-sm animate-candle"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-foreground mb-4">
            Алексей Мельников
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            1990 — 2024
          </p>
          <Separator className="mt-8 mb-6 mx-auto w-24" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Екатеринбургский блогер, создатель каналов о жизни города. Отец, муж, сын. 
            Человек, который делал Екатеринбург ближе и понятнее для тысяч людей.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-4xl font-cormorant font-semibold text-center mb-12 animate-fade-in">
            Хронология событий
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in-slow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="md:ml-20">
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-accent/40">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="bg-accent/10 p-3 rounded-lg">
                            <Icon 
                              name={event.type === 'tragic' ? 'Heart' : event.type === 'news' ? 'MessageCircle' : 'Info'} 
                              className="w-6 h-6 text-accent" 
                            />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                            <time className="text-sm font-semibold text-accent">
                              {event.date}
                            </time>
                            {event.time && (
                              <>
                                <span className="hidden md:inline text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{event.time}</span>
                              </>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-cormorant font-semibold mb-3 text-foreground">
                            {event.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="absolute left-6 top-8 w-5 h-5 bg-accent rounded-full border-4 border-background hidden md:block shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-cormorant font-semibold text-center mb-6 animate-fade-in">
            Его наследие
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Алексей создал несколько популярных телеграм-каналов и бот, которые продолжают помогать жителям Екатеринбурга
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in-slow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-6 h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border-accent/20 hover:border-accent/40">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon name={channel.icon} className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-cormorant font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                        {channel.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {channel.description}
                      </p>
                      <div className="flex items-center text-accent text-sm font-medium">
                        <span>Перейти в канал</span>
                        <Icon name="ExternalLink" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <section className="text-center">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-accent/20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-2 h-12 bg-accent/30 rounded-full animate-candle"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-5 bg-gradient-to-t from-amber-500/80 to-amber-300/40 rounded-full blur-sm animate-candle"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-cormorant font-semibold mb-4 text-foreground">
              Вечная память
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Алексей Мельников останется в наших сердцах как человек, который искренне любил свой город 
              и делился этой любовью с другими. Его работа продолжает жить и помогать людям.
            </p>
            
            <div className="mt-8 pt-8 border-t border-accent/10">
              <p className="text-sm text-muted-foreground">
                У Алексея осталась трехлетняя дочь. Светлая память мужу, отцу и сыну.
              </p>
            </div>
          </Card>
        </section>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Создано с глубоким уважением к памяти Алексея Мельникова</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;