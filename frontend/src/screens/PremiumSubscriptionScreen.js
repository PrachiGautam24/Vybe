import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';
import PremiumBadge from '../components/PremiumBadge';
import PremiumButton from '../components/PremiumButton';
import { usePremium } from '../context/PremiumContext';

/**
 * Premium Subscription Screen
 * Shows premium benefits and subscription options
 */
export default function PremiumSubscriptionScreen({ navigation }) {
  const { isPremium, activatePremium, openSubscriptionFlow } = usePremium();

  const premiumBenefits = [
    {
      icon: '👑',
      title: 'Exclusive Badges',
      description: 'Unlock premium badges like Champion, Night Owl, and Distance Crusher',
    },
    {
      icon: '🎁',
      title: 'Premium Store Items',
      description: 'Access to high-value rewards like ₹500 Amazon vouchers and premium gear',
    },
    {
      icon: '🎯',
      title: 'Premium Missions',
      description: 'Take on exclusive challenges with higher XP rewards',
    },
    {
      icon: '🏆',
      title: 'Tournament Access',
      description: 'Enter premium tournaments with bigger prizes and exclusive competitions',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Detailed insights into your fitness journey and performance tracking',
    },
    {
      icon: '🎨',
      title: 'Customization Options',
      description: 'Personalize your profile with premium themes and avatars',
    },
  ];

  const subscriptionPlans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '₹199',
      period: '/month',
      savings: null,
      popular: false,
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: '₹1,999',
      period: '/year',
      savings: 'Save 17%',
      popular: true,
    },
  ];

  const [selectedPlan, setSelectedPlan] = React.useState('yearly');

  const handleSubscribe = () => {
    // TODO: Implement actual payment flow
    // For now, just activate premium
    activatePremium();
    navigation.goBack();
  };

  if (isPremium) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#000000', '#0A0A1F', '#000000']}
          style={styles.gradientBackground}
        >
          <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backButton}>←</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Premium Status</Text>
              <View style={styles.headerSpacer} />
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              <View style={styles.premiumActiveContainer}>
                <PremiumBadge size="large" />
                <Text style={styles.premiumActiveTitle}>You're Premium!</Text>
                <Text style={styles.premiumActiveSubtitle}>
                  Enjoy all the exclusive benefits
                </Text>
                
                <View style={styles.premiumActiveBenefits}>
                  {premiumBenefits.map((benefit, index) => (
                    <View key={index} style={styles.benefitActiveCard}>
                      <Text style={styles.benefitIcon}>{benefit.icon}</Text>
                      <View style={styles.benefitActiveContent}>
                        <Text style={styles.benefitActiveTitle}>{benefit.title}</Text>
                        <Text style={styles.benefitActiveDescription}>
                          {benefit.description}
                        </Text>
                      </View>
                      <Text style={styles.benefitCheckmark}>✓</Text>
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0A0A1F', '#000000']}
        style={styles.gradientBackground}
      >
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backButton}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Unlock Premium</Text>
            <View style={styles.headerSpacer} />
          </View>

          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <PremiumBadge size="large" />
              <Text style={styles.heroTitle}>Upgrade to Premium</Text>
              <Text style={styles.heroSubtitle}>
                Unlock exclusive badges, missions, and rewards
              </Text>
            </View>

            {/* Benefits List */}
            <View style={styles.benefitsContainer}>
              <Text style={styles.sectionTitle}>Premium Benefits</Text>
              {premiumBenefits.map((benefit, index) => (
                <View key={index} style={styles.benefitCard}>
                  <Text style={styles.benefitIcon}>{benefit.icon}</Text>
                  <View style={styles.benefitContent}>
                    <Text style={styles.benefitTitle}>{benefit.title}</Text>
                    <Text style={styles.benefitDescription}>{benefit.description}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Subscription Plans */}
            <View style={styles.plansContainer}>
              <Text style={styles.sectionTitle}>Choose Your Plan</Text>
              {subscriptionPlans.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  style={[
                    styles.planCard,
                    selectedPlan === plan.id && styles.planCardSelected,
                    plan.popular && styles.planCardPopular,
                  ]}
                  onPress={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularText}>MOST POPULAR</Text>
                    </View>
                  )}
                  <View style={styles.planHeader}>
                    <View>
                      <Text style={styles.planName}>{plan.name}</Text>
                      {plan.savings && (
                        <Text style={styles.planSavings}>{plan.savings}</Text>
                      )}
                    </View>
                    <View style={styles.planPriceContainer}>
                      <Text style={styles.planPrice}>{plan.price}</Text>
                      <Text style={styles.planPeriod}>{plan.period}</Text>
                    </View>
                  </View>
                  <View style={[
                    styles.planRadio,
                    selectedPlan === plan.id && styles.planRadioSelected
                  ]}>
                    {selectedPlan === plan.id && <View style={styles.planRadioInner} />}
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.bottomSpacing} />
          </ScrollView>

          {/* Bottom CTA */}
          <View style={styles.bottomCTA}>
            <PremiumButton 
              onPress={handleSubscribe}
              text="Subscribe Now"
              icon="👑"
            />
            <Text style={styles.disclaimer}>
              Cancel anytime. Auto-renewal. Terms apply.
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  backButton: {
    fontSize: 28,
    color: THEME.colors.textPrimary,
    width: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
  headerSpacer: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginTop: 20,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: THEME.colors.textSecondary,
    textAlign: 'center',
  },
  benefitsContainer: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 16,
  },
  benefitCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.2)',
  },
  benefitIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: THEME.colors.textSecondary,
    lineHeight: 20,
  },
  plansContainer: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  planCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    position: 'relative',
  },
  planCardSelected: {
    borderColor: 'rgba(255, 215, 0, 0.6)',
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
  },
  planCardPopular: {
    borderColor: 'rgba(255, 215, 0, 0.4)',
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 0.5,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  planSavings: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4FFFB0',
  },
  planPriceContainer: {
    alignItems: 'flex-end',
  },
  planPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  planPeriod: {
    fontSize: 14,
    color: THEME.colors.textSecondary,
  },
  planRadio: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planRadioSelected: {
    borderColor: '#FFD700',
  },
  planRadioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFD700',
  },
  bottomCTA: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  disclaimer: {
    fontSize: 12,
    color: THEME.colors.textSecondary,
    textAlign: 'center',
    marginTop: 12,
  },
  bottomSpacing: {
    height: 20,
  },
  
  // Premium Active Styles
  premiumActiveContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  premiumActiveTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 20,
    marginBottom: 8,
    textShadowColor: 'rgba(255, 215, 0, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  premiumActiveSubtitle: {
    fontSize: 16,
    color: THEME.colors.textSecondary,
    marginBottom: 32,
  },
  premiumActiveBenefits: {
    width: '100%',
  },
  benefitActiveCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
    alignItems: 'center',
  },
  benefitActiveContent: {
    flex: 1,
    marginRight: 12,
  },
  benefitActiveTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  benefitActiveDescription: {
    fontSize: 14,
    color: THEME.colors.textSecondary,
    lineHeight: 20,
  },
  benefitCheckmark: {
    fontSize: 24,
    color: '#FFD700',
  },
});
