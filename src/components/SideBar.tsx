import '../styles/sidebar.scss';
import { Button } from './Button';

interface SideBarProps {
  genres : Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>,
  handleClickButton: (id: number) => void;
  selectedGenreId: number,  
}


export function SideBar(props: SideBarProps) {
  // Complete aqui
  const { genres, handleClickButton, selectedGenreId } = props;

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}