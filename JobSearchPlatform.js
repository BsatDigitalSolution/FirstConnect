import React, { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Search,
  MessageCircle,
  Bell,
  Settings,
  Eye,
  Edit,
  Trash2,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Building,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";

// Job Search Platform MVP - Complete Implementation with Regular CSS

const styles = `
  .app-container {
    min-height: 100vh;
    background-color: #f9fafb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
  }

  .auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
  }

  .auth-form {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 28rem;
  }

  .auth-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .auth-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .auth-subtitle {
    color: #6b7280;
  }

  .tab-container {
    margin-bottom: 1.5rem;
  }

  .tab-buttons {
    display: flex;
    background: #f3f4f6;
    border-radius: 0.5rem;
    padding: 0.25rem;
  }

  .tab-button {
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  .tab-button.active {
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    color: #2563eb;
    font-weight: 500;
  }

  .tab-button.inactive {
    color: #6b7280;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .form-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .btn-primary {
    width: 100%;
    background: #2563eb;
    color: white;
    font-weight: 500;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-primary:hover {
    background: #1d4ed8;
  }

  .btn-success {
    width: 100%;
    background: #059669;
    color: white;
    font-weight: 500;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-success:hover {
    background: #047857;
  }

  .demo-accounts {
    margin-top: 1.5rem;
    padding: 1rem;
    background: #fefce8;
    border-radius: 0.5rem;
  }

  .demo-title {
    font-size: 0.875rem;
    color: #92400e;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .demo-list {
    font-size: 0.75rem;
    color: #a16207;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  /* Navigation Styles */
  .navbar {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 0.75rem 1rem;
  }

  .navbar-content {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2563eb;
  }

  .navbar-nav {
    display: flex;
    gap: 1.5rem;
  }

  .nav-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    background: transparent;
    text-decoration: none;
    color: #6b7280;
  }

  .nav-button.active {
    background: #dbeafe;
    color: #1d4ed8;
  }

  .nav-button:hover {
    color: #1f2937;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .profile-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  .profile-button:hover {
    background: #f3f4f6;
  }

  .profile-avatar {
    font-size: 1.5rem;
  }

  .profile-name {
    font-weight: 500;
    color: #374151;
  }

  .btn-logout {
    padding: 0.5rem 1rem;
    background: #dc2626;
    color: white;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-logout:hover {
    background: #b91c1c;
  }

  .notification-badge {
    background: #ef4444;
    color: white;
    font-size: 0.75rem;
    border-radius: 9999px;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main Content Styles */
  .main-content {
    padding: 1.5rem 0;
  }

  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #1f2937;
  }

  /* Card Styles */
  .card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  }

  .card-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #1f2937;
  }

  /* Grid Styles */
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) {
    .md-grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    .md-grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    .md-grid-cols-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .lg-grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    .lg-grid-cols-6 {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  /* Stats Card Styles */
  .stats-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  }

  .stats-card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stats-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
  }

  .stats-number {
    font-size: 2rem;
    font-weight: bold;
    color: #111827;
  }

  .stats-icon {
    padding: 0.75rem;
    border-radius: 0.5rem;
  }

  .stats-icon.blue {
    background: #dbeafe;
    color: #2563eb;
  }

  .stats-icon.green {
    background: #d1fae5;
    color: #059669;
  }

  .stats-icon.yellow {
    background: #fef3c7;
    color: #d97706;
  }

  .stats-icon.purple {
    background: #e0e7ff;
    color: #7c3aed;
  }

  /* Job Card Styles */
  .job-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
    transition: box-shadow 0.3s;
  }

  .job-card:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .job-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .job-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
  }

  .job-meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .job-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .job-badge.full-time {
    background: #d1fae5;
    color: #065f46;
  }

  .job-badge.part-time {
    background: #dbeafe;
    color: #1e40af;
  }

  .job-badge.contract {
    background: #e0e7ff;
    color: #5b21b6;
  }

  .job-description {
    color: #374151;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .job-requirements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .requirement-tag {
    background: #f3f4f6;
    color: #374151;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  .job-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .job-applications {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .job-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-outline {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    background: transparent;
    cursor: pointer;
    transition: border-color 0.3s;
    color: #374151;
  }

  .btn-outline:hover {
    border-color: #9ca3af;
  }

  .btn-apply {
    padding: 0.5rem 1rem;
    background: #2563eb;
    color: white;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-apply:hover {
    background: #1d4ed8;
  }

  .btn-apply:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  /* Search Filter Styles */
  .search-filters {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .search-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .search-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .search-button {
    background: #2563eb;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .search-button:hover {
    background: #1d4ed8;
  }

  /* Empty State Styles */
  .empty-state {
    text-align: center;
    padding: 3rem;
  }

  .empty-state-icon {
    color: #9ca3af;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .empty-state-text {
    color: #6b7280;
  }

  /* Application Card Styles */
  .application-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
  }

  .application-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .application-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
  }

  .application-company {
    color: #6b7280;
  }

  .application-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.5rem;
  }

  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .status-badge.pending {
    background: #fef3c7;
    color: #92400e;
  }

  .status-badge.accepted {
    background: #d1fae5;
    color: #065f46;
  }

  .status-badge.rejected {
    background: #fecaca;
    color: #991b1b;
  }

  .application-letter {
    color: #374151;
    font-size: 0.875rem;
  }

  /* Message Card Styles */
  .message-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
  }

  .message-card.unread {
    border-left: 4px solid #3b82f6;
  }

  .message-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .message-sender {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .message-avatar {
    font-size: 1.5rem;
  }

  .message-sender-name {
    font-weight: 500;
    color: #1f2937;
  }

  .message-subject {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .message-date {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .message-content {
    color: #374151;
  }

  .message-actions {
    margin-top: 0.75rem;
  }

  .btn-link {
    color: #2563eb;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: color 0.3s;
  }

  .btn-link:hover {
    color: #1d4ed8;
  }

  /* Form Styles */
  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-textarea {
    resize: vertical;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .btn-secondary {
    background: #d1d5db;
    color: #374151;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .btn-secondary:hover {
    background: #9ca3af;
  }

  /* Profile Styles */
  .profile-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .profile-avatar-large {
    font-size: 4rem;
  }

  .profile-name {
    font-size: 2rem;
    font-weight: bold;
    color: #1f2937;
  }

  .profile-email {
    color: #6b7280;
  }

  .profile-type-badge {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .profile-type-badge.applicant {
    background: #dbeafe;
    color: #1e40af;
  }

  .profile-type-badge.employer {
    background: #d1fae5;
    color: #065f46;
  }

  .profile-type-badge.admin {
    background: #e0e7ff;
    color: #5b21b6;
  }

  .profile-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .profile-field {
    margin-bottom: 1rem;
  }

  .profile-field-title {
    font-weight: 600;
    color: #1f2937;
  }

  .profile-field-content {
    color: #6b7280;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .skill-tag {
    background: #dbeafe;
    color: #1e40af;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  .profile-divider {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  /* Statistics Panel */
  .stats-panel {
    margin-top: 2rem;
    padding: 1.5rem;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    border-radius: 0.75rem;
  }

  .stats-panel-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .stats-panel-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .stats-panel-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .stats-panel-grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  .stats-panel-item {
    background: rgba(255, 255, 255, 0.15);
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-align: center;
    font-size: 0.875rem;
  }

  /* Job Management */
  .job-management-card {
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .job-management-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .job-management-title {
    font-weight: 600;
    color: #1f2937;
  }

  .job-management-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
  }

  .job-management-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .applications-count {
    background: #d1fae5;
    color: #065f46;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  .icon-button {
    color: #2563eb;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: color 0.3s;
  }

  .icon-button:hover {
    color: #1d4ed8;
  }

  .icon-button.danger {
    color: #dc2626;
  }

  .icon-button.danger:hover {
    color: #b91c1c;
  }

  .applications-section {
    border-top: 1px solid #e5e7eb;
    padding-top: 0.75rem;
    margin-top: 0.75rem;
  }

  .applications-title {
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .applications-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .application-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fafb;
    padding: 0.75rem;
    border-radius: 0.375rem;
  }

  .application-candidate {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .application-candidate-avatar {
    font-size: 1.25rem;
  }

  .application-candidate-name {
    font-weight: 500;
    font-size: 0.875rem;
  }

  .application-candidate-date {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .application-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-accept {
    background: #059669;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    transition: background-color 0.3s;
  }

  .btn-accept:hover {
    background: #047857;
  }

  .btn-reject {
    background: #dc2626;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    transition: background-color 0.3s;
  }

  .btn-reject:hover {
    background: #b91c1c;
  }

  /* Utility Classes */
  .flex {
    display: flex;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .space-y-4 > * + * {
    margin-top: 1rem;
  }

  .space-y-6 > * + * {
    margin-top: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mb-6 {
    margin-bottom: 1.5rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  .mt-6 {
    margin-top: 1.5rem;
  }

  .text-center {
    text-align: center;
  }

  .font-semibold {
    font-weight: 600;
  }

  .font-bold {
    font-weight: bold;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-xs {
    font-size: 0.75rem;
  }

  .hidden {
    display: none;
  }

  .max-w-4xl {
    max-width: 64rem;
  }

  .text-right {
    text-align: right;
  }
`;

function JobSearchPlatform() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState("applicant");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState("login");

  // Application State
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [companies, setCompanies] = useState([]);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");

  // Form State
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "applicant",
  });

  // Initialize Sample Data
  useEffect(() => {
    initializeSampleData();
  }, []);

  const initializeSampleData = () => {
    // Sample Users
    const sampleUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        userType: "applicant",
        avatar: "👨‍💼",
        profile: {
          title: "Full Stack Developer",
          experience: "3 years",
          location: "Lagos, Nigeria",
          skills: ["React", "Node.js", "Python", "MongoDB"],
          bio: "Passionate full-stack developer with 3 years of experience in modern web technologies.",
          resume: "john_doe_resume.pdf",
        },
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@techcorp.com",
        userType: "employer",
        avatar: "👩‍💼",
        profile: {
          company: "TechCorp Nigeria",
          position: "HR Manager",
          companySize: "50-100 employees",
          industry: "Technology",
        },
      },
      {
        id: 3,
        name: "Admin User",
        email: "admin@platform.com",
        userType: "admin",
        avatar: "👑",
      },
    ];

    // Sample Jobs
    const sampleJobs = [
      {
        id: 1,
        title: "Senior React Developer",
        company: "TechCorp Nigeria",
        employerId: 2,
        location: "Lagos, Nigeria",
        type: "Full-time",
        salary: "₦300,000 - ₦500,000",
        description:
          "We are looking for an experienced React developer to join our growing team...",
        requirements: [
          "3+ years React experience",
          "TypeScript",
          "Node.js",
          "GraphQL",
        ],
        postedDate: "2024-01-15",
        status: "active",
        applications: 12,
      },
      {
        id: 2,
        title: "Product Manager",
        company: "StartupHub",
        employerId: 2,
        location: "Abuja, Nigeria",
        type: "Full-time",
        salary: "₦400,000 - ₦600,000",
        description:
          "Join us as a Product Manager to drive product strategy and execution...",
        requirements: [
          "5+ years PM experience",
          "Agile methodology",
          "Data analysis",
        ],
        postedDate: "2024-01-20",
        status: "active",
        applications: 8,
      },
      {
        id: 3,
        title: "UX Designer",
        company: "DesignStudio",
        employerId: 2,
        location: "Remote",
        type: "Contract",
        salary: "₦200,000 - ₦350,000",
        description:
          "Create amazing user experiences for our digital products...",
        requirements: [
          "Portfolio required",
          "Figma",
          "User research",
          "Prototyping",
        ],
        postedDate: "2024-01-18",
        status: "active",
        applications: 15,
      },
    ];

    // Sample Applications
    const sampleApplications = [
      {
        id: 1,
        jobId: 1,
        applicantId: 1,
        status: "pending",
        appliedDate: "2024-01-16",
        coverLetter: "I am very interested in this position...",
      },
    ];

    // Sample Messages
    const sampleMessages = [
      {
        id: 1,
        fromId: 2,
        toId: 1,
        subject: "Interview Invitation - React Developer Position",
        content: "Hi John, We were impressed with your application...",
        timestamp: "2024-01-17T10:30:00Z",
        read: false,
      },
    ];

    setUsers(sampleUsers);
    setJobs(sampleJobs);
    setApplications(sampleApplications);
    setMessages(sampleMessages);
  };

  // Authentication Functions
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === loginForm.email);
    if (user) {
      setCurrentUser(user);
      setUserType(user.userType);
      setIsAuthenticated(true);
      setCurrentView(
        user.userType === "applicant"
          ? "jobs"
          : user.userType === "employer"
          ? "employer-dashboard"
          : "admin-dashboard"
      );
    } else {
      alert(
        "User not found! Try: john@example.com, jane@techcorp.com, or admin@platform.com"
      );
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      ...signupForm,
      avatar: signupForm.userType === "applicant" ? "👤" : "🏢",
      profile: {},
    };
    setUsers([...users, newUser]);
    alert("Account created successfully! You can now login.");
    setCurrentView("login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setCurrentView("login");
  };

  // Job Functions
  const applyForJob = (jobId) => {
    const newApplication = {
      id: applications.length + 1,
      jobId,
      applicantId: currentUser.id,
      status: "pending",
      appliedDate: new Date().toISOString().split("T")[0],
      coverLetter:
        "I am interested in this position and believe I would be a great fit.",
    };
    setApplications([...applications, newApplication]);
    alert("Application submitted successfully!");
  };

  const updateApplicationStatus = (applicationId, status) => {
    setApplications((apps) =>
      apps.map((app) => (app.id === applicationId ? { ...app, status } : app))
    );
  };

  // Messaging Functions
  const sendMessage = (toId, subject, content) => {
    const newMessage = {
      id: messages.length + 1,
      fromId: currentUser.id,
      toId,
      subject,
      content,
      timestamp: new Date().toISOString(),
      read: false,
    };
    setMessages([...messages, newMessage]);
  };

  // Filter Jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      !locationFilter || job.location.includes(locationFilter);
    const matchesType = !jobTypeFilter || job.type === jobTypeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  // Get User Applications
  const userApplications = applications.filter(
    (app) => app.applicantId === currentUser?.id
  );
  const userMessages = messages.filter(
    (msg) => msg.toId === currentUser?.id || msg.fromId === currentUser?.id
  );

  // Components

  // Login Component
  const LoginForm = () => (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-header">
          <h1 className="auth-title">JobConnect</h1>
          <p className="auth-subtitle">
            Find your dream job or perfect candidate
          </p>
        </div>

        <div className="tab-container">
          <div className="tab-buttons">
            <button
              onClick={() => setCurrentView("login")}
              className={`tab-button ${
                currentView === "login" ? "active" : "inactive"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setCurrentView("signup")}
              className={`tab-button ${
                currentView === "signup" ? "active" : "inactive"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {currentView === "login" ? (
          <form onSubmit={handleLogin} className="form-container">
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              className="form-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              className="form-input"
              required
            />
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="form-container">
            <input
              type="text"
              placeholder="Full Name"
              value={signupForm.name}
              onChange={(e) =>
                setSignupForm({ ...signupForm, name: e.target.value })
              }
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={signupForm.email}
              onChange={(e) =>
                setSignupForm({ ...signupForm, email: e.target.value })
              }
              className="form-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              className="form-input"
              required
            />
            <select
              value={signupForm.userType}
              onChange={(e) =>
                setSignupForm({ ...signupForm, userType: e.target.value })
              }
              className="form-input"
            >
              <option value="applicant">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
            <button type="submit" className="btn-success">
              Create Account
            </button>
          </form>
        )}

        <div className="demo-accounts">
          <p className="demo-title">Demo Accounts:</p>
          <div className="demo-list">
            <div>👤 Applicant: john@example.com</div>
            <div>🏢 Employer: jane@techcorp.com</div>
            <div>👑 Admin: admin@platform.com</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Navigation Component
  const Navigation = () => (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-brand">JobConnect</h1>
          <div className="navbar-nav">
            {userType === "applicant" && (
              <>
                <button
                  onClick={() => setCurrentView("jobs")}
                  className={`nav-button ${
                    currentView === "jobs" ? "active" : ""
                  }`}
                >
                  <Search size={18} />
                  <span>Find Jobs</span>
                </button>
                <button
                  onClick={() => setCurrentView("applications")}
                  className={`nav-button ${
                    currentView === "applications" ? "active" : ""
                  }`}
                >
                  <Briefcase size={18} />
                  <span>My Applications</span>
                </button>
              </>
            )}
            {userType === "employer" && (
              <>
                <button
                  onClick={() => setCurrentView("employer-dashboard")}
                  className={`nav-button ${
                    currentView === "employer-dashboard" ? "active" : ""
                  }`}
                >
                  <BarChart3 size={18} />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setCurrentView("post-job")}
                  className={`nav-button ${
                    currentView === "post-job" ? "active" : ""
                  }`}
                >
                  <Building size={18} />
                  <span>Post Job</span>
                </button>
              </>
            )}
            {userType === "admin" && (
              <button
                onClick={() => setCurrentView("admin-dashboard")}
                className={`nav-button ${
                  currentView === "admin-dashboard" ? "active" : ""
                }`}
              >
                <Shield size={18} />
                <span>Admin Panel</span>
              </button>
            )}
            <button
              onClick={() => setCurrentView("messages")}
              className={`nav-button ${
                currentView === "messages" ? "active" : ""
              }`}
            >
              <MessageCircle size={18} />
              <span>Messages</span>
              {userMessages.filter((m) => !m.read && m.toId === currentUser.id)
                .length > 0 && (
                <span className="notification-badge">
                  {
                    userMessages.filter(
                      (m) => !m.read && m.toId === currentUser.id
                    ).length
                  }
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="navbar-right">
          <button
            onClick={() => setCurrentView("profile")}
            className="profile-button"
          >
            <span className="profile-avatar">{currentUser.avatar}</span>
            <span className="profile-name">{currentUser.name}</span>
          </button>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );

  // Job Search Component
  const JobSearch = () => (
    <div className="container">
      {/* Search Filters */}
      <div className="search-filters">
        <h2 className="card-title">
          <Search size={24} />
          Find Your Dream Job
        </h2>
        <div className="search-grid">
          <input
            type="text"
            placeholder="Job title or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
          />
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="form-select"
          >
            <option value="">All Locations</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Remote">Remote</option>
          </select>
          <select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
            className="form-select"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
          <button className="search-button">Search Jobs</button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <div>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <Building size={16} />
                    {job.company}
                  </div>
                  <div className="job-meta-item">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="job-meta-item">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`job-badge ${
                    job.type === "Full-time"
                      ? "full-time"
                      : job.type === "Part-time"
                      ? "part-time"
                      : "contract"
                  }`}
                >
                  {job.type}
                </span>
                <div
                  className="text-sm"
                  style={{ color: "#6b7280", marginTop: "0.5rem" }}
                >
                  Posted {new Date(job.postedDate).toLocaleDateString()}
                </div>
              </div>
            </div>

            <p className="job-description">{job.description}</p>

            <div className="job-requirements">
              {job.requirements.slice(0, 4).map((req, index) => (
                <span key={index} className="requirement-tag">
                  {req}
                </span>
              ))}
            </div>

            <div className="job-footer">
              <div className="job-applications">
                {job.applications} applications
              </div>
              <div className="job-actions">
                <button className="btn-outline">View Details</button>
                <button
                  onClick={() => applyForJob(job.id)}
                  disabled={userApplications.some(
                    (app) => app.jobId === job.id
                  )}
                  className="btn-apply"
                >
                  {userApplications.some((app) => app.jobId === job.id)
                    ? "Applied"
                    : "Apply Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <Search size={48} />
          </div>
          <p className="empty-state-text">
            No jobs found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );

  // Applications Component
  const ApplicationsView = () => (
    <div className="container">
      <h2 className="page-title">My Applications</h2>

      <div className="space-y-4">
        {userApplications.map((application) => {
          const job = jobs.find((j) => j.id === application.jobId);
          return (
            <div key={application.id} className="application-card">
              <div className="application-header">
                <div>
                  <h3 className="application-title">{job?.title}</h3>
                  <p className="application-company">{job?.company}</p>
                  <div className="application-meta">
                    <span>
                      Applied:{" "}
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>{job?.location}</span>
                  </div>
                </div>
                <span className={`status-badge ${application.status}`}>
                  {application.status.charAt(0).toUpperCase() +
                    application.status.slice(1)}
                </span>
              </div>
              <p className="application-letter">{application.coverLetter}</p>
            </div>
          );
        })}
      </div>

      {userApplications.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <Briefcase size={48} />
          </div>
          <p className="empty-state-text mb-4">
            You haven't applied to any jobs yet.
          </p>
          <button
            onClick={() => setCurrentView("jobs")}
            className="btn-primary"
          >
            Browse Jobs
          </button>
        </div>
      )}
    </div>
  );

  // Messages Component
  const MessagesView = () => (
    <div className="container">
      <h2 className="page-title">Messages</h2>

      <div className="space-y-4">
        {userMessages.map((message) => {
          const sender = users.find((u) => u.id === message.fromId);
          const isFromMe = message.fromId === currentUser.id;

          return (
            <div
              key={message.id}
              className={`message-card ${
                !message.read && !isFromMe ? "unread" : ""
              }`}
            >
              <div className="message-header">
                <div className="message-sender">
                  <span className="message-avatar">{sender?.avatar}</span>
                  <div>
                    <p className="message-sender-name">
                      {isFromMe
                        ? "To: " +
                          users.find((u) => u.id === message.toId)?.name
                        : sender?.name}
                    </p>
                    <p className="message-subject">{message.subject}</p>
                  </div>
                </div>
                <div className="message-date">
                  {new Date(message.timestamp).toLocaleDateString()}
                </div>
              </div>
              <p className="message-content">{message.content}</p>
              {!message.read && !isFromMe && (
                <div className="message-actions">
                  <button
                    onClick={() =>
                      setMessages((msgs) =>
                        msgs.map((m) =>
                          m.id === message.id ? { ...m, read: true } : m
                        )
                      )
                    }
                    className="btn-link"
                  >
                    Mark as Read
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {userMessages.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <MessageCircle size={48} />
          </div>
          <p className="empty-state-text">No messages yet.</p>
        </div>
      )}
    </div>
  );

  // Employer Dashboard Component
  const EmployerDashboard = () => {
    const myJobs = jobs.filter((job) => job.employerId === currentUser.id);
    const myApplications = applications.filter((app) =>
      myJobs.some((job) => job.id === app.jobId)
    );

    return (
      <div className="container">
        <h2 className="page-title">Employer Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid md-grid-cols-4 mb-6">
          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Active Jobs</p>
                <p className="stats-number">{myJobs.length}</p>
              </div>
              <div className="stats-icon blue">
                <Briefcase size={24} />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Total Applications</p>
                <p className="stats-number">{myApplications.length}</p>
              </div>
              <div className="stats-icon green">
                <Users size={24} />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Pending Reviews</p>
                <p className="stats-number">
                  {
                    myApplications.filter((app) => app.status === "pending")
                      .length
                  }
                </p>
              </div>
              <div className="stats-icon yellow">
                <Eye size={24} />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">This Month</p>
                <p className="stats-number">
                  {
                    myApplications.filter(
                      (app) =>
                        new Date(app.appliedDate).getMonth() ===
                        new Date().getMonth()
                    ).length
                  }
                </p>
              </div>
              <div className="stats-icon purple">
                <Calendar size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* My Jobs */}
        <div className="card">
          <div className="card-content">
            <div className="flex-between mb-6">
              <h3 className="card-title">My Job Postings</h3>
              <button
                onClick={() => setCurrentView("post-job")}
                className="btn-primary"
              >
                Post New Job
              </button>
            </div>

            <div className="space-y-4">
              {myJobs.map((job) => (
                <div key={job.id} className="job-management-card">
                  <div className="job-management-header">
                    <div>
                      <h4 className="job-management-title">{job.title}</h4>
                      <div className="job-management-meta">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="job-management-actions">
                      <span className="applications-count">
                        {
                          applications.filter((app) => app.jobId === job.id)
                            .length
                        }{" "}
                        applications
                      </span>
                      <button className="icon-button">
                        <Edit size={16} />
                      </button>
                      <button className="icon-button danger">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Applications for this job */}
                  <div className="applications-section">
                    <h5 className="applications-title">Recent Applications:</h5>
                    <div className="applications-list">
                      {applications
                        .filter((app) => app.jobId === job.id)
                        .slice(0, 3)
                        .map((app) => {
                          const applicant = users.find(
                            (u) => u.id === app.applicantId
                          );
                          return (
                            <div key={app.id} className="application-item">
                              <div className="application-candidate">
                                <span className="application-candidate-avatar">
                                  {applicant?.avatar}
                                </span>
                                <div>
                                  <p className="application-candidate-name">
                                    {applicant?.name}
                                  </p>
                                  <p className="application-candidate-date">
                                    Applied{" "}
                                    {new Date(
                                      app.appliedDate
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <div className="application-actions">
                                <span className={`status-badge ${app.status}`}>
                                  {app.status}
                                </span>
                                {app.status === "pending" && (
                                  <>
                                    <button
                                      onClick={() =>
                                        updateApplicationStatus(
                                          app.id,
                                          "accepted"
                                        )
                                      }
                                      className="btn-accept"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      onClick={() =>
                                        updateApplicationStatus(
                                          app.id,
                                          "rejected"
                                        )
                                      }
                                      className="btn-reject"
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {myJobs.length === 0 && (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <Briefcase size={48} />
                </div>
                <p className="empty-state-text mb-4">
                  You haven't posted any jobs yet.
                </p>
                <button
                  onClick={() => setCurrentView("post-job")}
                  className="btn-primary"
                >
                  Post Your First Job
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Post Job Component
  const PostJob = () => {
    const [jobForm, setJobForm] = useState({
      title: "",
      description: "",
      requirements: "",
      location: "",
      type: "Full-time",
      salary: "",
    });

    const handlePostJob = (e) => {
      e.preventDefault();
      const newJob = {
        id: jobs.length + 1,
        ...jobForm,
        company: currentUser.profile?.company || "Your Company",
        employerId: currentUser.id,
        requirements: jobForm.requirements
          .split("\n")
          .filter((req) => req.trim()),
        postedDate: new Date().toISOString().split("T")[0],
        status: "active",
        applications: 0,
      };
      setJobs([...jobs, newJob]);
      alert("Job posted successfully!");
      setCurrentView("employer-dashboard");
    };

    return (
      <div className="container max-w-4xl">
        <h2 className="page-title">Post a New Job</h2>

        <div className="card">
          <div className="card-content">
            <form onSubmit={handlePostJob} className="space-y-6">
              <div className="form-group">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  value={jobForm.title}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, title: e.target.value })
                  }
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Job Description</label>
                <textarea
                  value={jobForm.description}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, description: e.target.value })
                  }
                  rows={6}
                  className="form-textarea"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Requirements (one per line)
                </label>
                <textarea
                  value={jobForm.requirements}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, requirements: e.target.value })
                  }
                  rows={4}
                  className="form-textarea"
                  placeholder="3+ years experience&#10;Bachelor's degree&#10;Knowledge of React"
                  required
                />
              </div>

              <div className="grid md-grid-cols-3">
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    value={jobForm.location}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, location: e.target.value })
                    }
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Job Type</label>
                  <select
                    value={jobForm.type}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, type: e.target.value })
                    }
                    className="form-select"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Salary Range</label>
                  <input
                    type="text"
                    value={jobForm.salary}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, salary: e.target.value })
                    }
                    className="form-input"
                    placeholder="₦300,000 - ₦500,000"
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => setCurrentView("employer-dashboard")}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Profile Component
  const ProfileView = () => (
    <div className="container max-w-4xl">
      <h2 className="page-title">My Profile</h2>

      <div className="card">
        <div className="card-content">
          <div className="profile-header">
            <span className="profile-avatar-large">{currentUser.avatar}</span>
            <div>
              <h3 className="profile-name">{currentUser.name}</h3>
              <p className="profile-email">{currentUser.email}</p>
              <span className={`profile-type-badge ${currentUser.userType}`}>
                {currentUser.userType.charAt(0).toUpperCase() +
                  currentUser.userType.slice(1)}
              </span>
            </div>
          </div>

          {currentUser.userType === "applicant" && (
            <div className="profile-section">
              <div className="profile-field">
                <h4 className="profile-field-title">Professional Title</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.title || "Not specified"}
                </p>
              </div>

              <div className="profile-field">
                <h4 className="profile-field-title">Experience</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.experience || "Not specified"}
                </p>
              </div>

              <div className="profile-field">
                <h4 className="profile-field-title">Location</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.location || "Not specified"}
                </p>
              </div>

              <div className="profile-field">
                <h4 className="profile-field-title">Bio</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.bio || "No bio provided"}
                </p>
              </div>

              {currentUser.profile?.skills && (
                <div className="profile-field">
                  <h4 className="profile-field-title">Skills</h4>
                  <div className="skills-list">
                    {currentUser.profile.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {currentUser.userType === "employer" && (
            <div className="profile-section">
              <div className="profile-field">
                <h4 className="profile-field-title">Company</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.company || "Not specified"}
                </p>
              </div>

              <div className="profile-field">
                <h4 className="profile-field-title">Position</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.position || "Not specified"}
                </p>
              </div>

              <div className="profile-field">
                <h4 className="profile-field-title">Company Size</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.companySize || "Not specified"}
                </p>
              </div>

              <div className="profile-field">
                <h4 className="profile-field-title">Industry</h4>
                <p className="profile-field-content">
                  {currentUser.profile?.industry || "Not specified"}
                </p>
              </div>
            </div>
          )}

          <div className="profile-divider">
            <button className="btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );

  // Admin Dashboard Component
  const AdminDashboard = () => {
    const totalUsers = users.length;
    const totalJobs = jobs.length;
    const totalApplications = applications.length;
    const activeJobs = jobs.filter((job) => job.status === "active").length;

    return (
      <div className="container">
        <h2 className="page-title">Admin Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid md-grid-cols-4 mb-6">
          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Total Users</p>
                <p className="stats-number">{totalUsers}</p>
              </div>
              <div className="stats-icon blue">
                <Users size={24} />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Active Jobs</p>
                <p className="stats-number">{activeJobs}</p>
              </div>
              <div className="stats-icon green">
                <Briefcase size={24} />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Applications</p>
                <p className="stats-number">{totalApplications}</p>
              </div>
              <div className="stats-icon yellow">
                <Eye size={24} />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-text">Messages</p>
                <p className="stats-number">{messages.length}</p>
              </div>
              <div className="stats-icon purple">
                <MessageCircle size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Platform Statistics */}
        <div className="stats-panel">
          <h3 className="stats-panel-title">Platform Overview</h3>
          <div className="stats-panel-grid">
            <div className="stats-panel-item">
              <div>Applicants</div>
              <div className="font-bold">
                {users.filter((u) => u.userType === "applicant").length}
              </div>
            </div>
            <div className="stats-panel-item">
              <div>Employers</div>
              <div className="font-bold">
                {users.filter((u) => u.userType === "employer").length}
              </div>
            </div>
            <div className="stats-panel-item">
              <div>Pending Applications</div>
              <div className="font-bold">
                {applications.filter((app) => app.status === "pending").length}
              </div>
            </div>
            <div className="stats-panel-item">
              <div>Accepted</div>
              <div className="font-bold">
                {applications.filter((app) => app.status === "accepted").length}
              </div>
            </div>
            <div className="stats-panel-item">
              <div>Rejected</div>
              <div className="font-bold">
                {applications.filter((app) => app.status === "rejected").length}
              </div>
            </div>
            <div className="stats-panel-item">
              <div>Success Rate</div>
              <div className="font-bold">
                {totalApplications > 0
                  ? Math.round(
                      (applications.filter((app) => app.status === "accepted")
                        .length /
                        totalApplications) *
                        100
                    )
                  : 0}
                %
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid md-grid-cols-2 mt-6">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Recent Users</h3>
              <div className="space-y-4">
                {users.slice(-5).map((user) => (
                  <div
                    key={user.id}
                    className="flex"
                    style={{ alignItems: "center", gap: "0.75rem" }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{user.avatar}</span>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm" style={{ color: "#6b7280" }}>
                        {user.userType}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Recent Jobs</h3>
              <div className="space-y-4">
                {jobs.slice(-5).map((job) => (
                  <div key={job.id}>
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      {job.company} • {job.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <style>{styles}</style>

      {!isAuthenticated ? (
        <LoginForm />
      ) : (
        <>
          <Navigation />
          <main className="main-content">
            {currentView === "jobs" && <JobSearch />}
            {currentView === "applications" && <ApplicationsView />}
            {currentView === "messages" && <MessagesView />}
            {currentView === "profile" && <ProfileView />}
            {currentView === "employer-dashboard" && <EmployerDashboard />}
            {currentView === "post-job" && <PostJob />}
            {currentView === "admin-dashboard" && <AdminDashboard />}
          </main>
        </>
      )}
    </div>
  );
}

export default JobSearchPlatform;
