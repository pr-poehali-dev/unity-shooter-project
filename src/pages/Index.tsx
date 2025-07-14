import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const levels = [
    {
      id: 1,
      title: "Первый Контакт",
      description: "Вторжение началось. Защитите базу от первой волны противника.",
      difficulty: "Новичок",
      progress: 100,
      status: "completed",
      image: "/img/40d043a3-c33e-4b6b-8951-1398bf29e902.jpg"
    },
    {
      id: 2,
      title: "Городские Руины",
      description: "Пробирайтесь через разрушенный мегаполис к эвакуационному центру.",
      difficulty: "Средний",
      progress: 65,
      status: "in-progress",
      image: "/img/4a160e8e-8790-4e85-acc9-74e472c357e0.jpg"
    },
    {
      id: 3,
      title: "Последний Рубеж",
      description: "Финальная битва за будущее человечества в космической станции.",
      difficulty: "Эксперт",
      progress: 0,
      status: "locked",
      image: "/img/40d043a3-c33e-4b6b-8951-1398bf29e902.jpg"
    }
  ];

  const features = [
    {
      icon: "Target",
      title: "Тактический Бой",
      description: "Используйте укрытия и тактику для победы над превосходящими силами противника"
    },
    {
      icon: "Zap",
      title: "Футуристическое Оружие",
      description: "Арсенал высокотехнологичного оружия с уникальными характеристиками"
    },
    {
      icon: "Users",
      title: "Эпическая История",
      description: "Захватывающий сюжет о борьбе человечества за выживание"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Новичок": return "bg-green-500";
      case "Средний": return "bg-yellow-500";
      case "Эксперт": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return "CheckCircle";
      case "in-progress": return "Play";
      case "locked": return "Lock";
      default: return "Circle";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-500 text-white font-montserrat">Unity Shooter</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight">
                  Последний 
                  <span className="text-orange-500"> Рубеж</span>
                </h1>
                <p className="text-xl text-gray-300 font-opensans max-w-lg">
                  Сюжетная кампания в мире будущего. Сражайтесь за выживание человечества в эпической битве против инопланетных захватчиков.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-montserrat">
                  <Icon name="Play" className="mr-2" />
                  Начать Игру
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 font-montserrat">
                  <Icon name="Download" className="mr-2" />
                  Скачать Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-blue-600/30 rounded-2xl blur-xl"></div>
              <img 
                src="/img/6c67e25d-315e-4570-977e-df0967e9e6bf.jpg" 
                alt="Game Hero" 
                className="relative rounded-2xl shadow-2xl w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Levels */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-4">Сюжетная Кампания</h2>
          <p className="text-xl text-gray-300 font-opensans">Пройдите через захватывающие уровни и спасите человечество</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level) => (
            <Card key={level.id} className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-all duration-300 hover-scale">
              <div className="relative">
                <img 
                  src={level.image} 
                  alt={level.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Icon 
                    name={getStatusIcon(level.status)} 
                    className={`w-8 h-8 ${level.status === 'completed' ? 'text-green-500' : level.status === 'in-progress' ? 'text-orange-500' : 'text-gray-500'}`}
                  />
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white font-montserrat">{level.title}</CardTitle>
                  <Badge className={`${getDifficultyColor(level.difficulty)} text-white text-xs`}>
                    {level.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-gray-300 font-opensans">
                  {level.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {level.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Прогресс</span>
                      <span className="text-orange-500">{level.progress}%</span>
                    </div>
                    <Progress value={level.progress} className="bg-slate-700" />
                  </div>
                )}
                
                <Button 
                  className={`w-full ${level.status === 'locked' ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} text-white font-montserrat`}
                  disabled={level.status === 'locked'}
                >
                  {level.status === 'completed' ? 'Пройдено' : level.status === 'in-progress' ? 'Продолжить' : 'Заблокировано'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-4">Особенности Игры</h2>
          <p className="text-xl text-gray-300 font-opensans">Современный шутер с инновационными механиками</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center">
                <Icon name={feature.icon} className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white font-montserrat">{feature.title}</h3>
              <p className="text-gray-300 font-opensans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center bg-gradient-to-r from-orange-500/20 to-blue-600/20 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-4">Готовы Спасти Человечество?</h2>
          <p className="text-xl text-gray-300 font-opensans mb-8">Начните свое эпическое путешествие уже сегодня</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-montserrat">
            <Icon name="Rocket" className="mr-2" />
            Начать Игру
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;