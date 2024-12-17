import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Hero from '../components/sections/Hero';
import CategorySection from '../components/sections/CategorySection';
import FeaturedContents from '../components/sections/FeaturedContents';
import { useFeaturedContents } from '../hooks/useContents';

export default function Top() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const { data: featuredContents = [] } = useFeaturedContents();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="space-y-8">
      <Hero />
      <CategorySection />
      <FeaturedContents contents={featuredContents} />
    </div>
  );
}